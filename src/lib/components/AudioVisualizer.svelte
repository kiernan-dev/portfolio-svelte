<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { audioStore, themeStore } from '$lib/stores';
	import { browser } from '$app/environment';

	let p5Instance: any;
	let sound: any;
	let fft: any;
	let startColor: any;
	let endColor: any;
	let rotateAngle = 0;
	let visualizerContainer: HTMLDivElement;
	let isPlaying = false;
	let currentTheme = 'dark';

	// Audio visualizer constants
	const fftStartingPoint = 0;
	const gradients = [
		{start: [255, 140, 0], end: [255, 0, 150]},    // Bright orange to pink
		{start: [0, 255, 255], end: [255, 0, 255]},    // Cyan to magenta  
		{start: [255, 255, 0], end: [255, 0, 0]},      // Yellow to red
		{start: [0, 255, 0], end: [0, 0, 255]},        // Green to blue
		{start: [255, 100, 255], end: [100, 255, 255]} // Pink to cyan
	];

	const darkGradients = [
		{start: [8, 70, 99], end: [119, 71, 28]},
		{start: [123, 127, 0], end: [109, 27, 82]},
		{start: [16, 47, 0], end: [114, 114, 108]},
		{start: [111, 49, 49], end: [127, 92, 70]},
		{start: [125, 105, 116], end: [93, 27, 62]},
		{start: [33, 103, 81], end: [12, 45, 78]}
	];

	let currentTrack = '/src/mp3/infinite-canvas.mp3';

	let isLoadingTrack = false;

	// Subscribe to stores
	audioStore.subscribe(audio => { 
		// Handle track changes first
		if (audio.currentTrack !== currentTrack) {
			currentTrack = audio.currentTrack;
			if (sound) {
				isLoadingTrack = true;
				loadNewTrack(audio.currentTrack);
			}
			return; // Don't handle play/pause changes during track switching
		}
		
		// Handle external play/pause changes (from settings panel) - but not during track loading
		if (audio.isPlaying !== isPlaying && !isLoadingTrack) {
			if (sound) {
				if (audio.isPlaying && !sound.isPlaying()) {
					sound.play();
				} else if (!audio.isPlaying && sound.isPlaying()) {
					sound.pause();
				}
			}
		}
		isPlaying = audio.isPlaying;
	});
	themeStore.subscribe(theme => { 
		currentTheme = theme;
		
		// Update gradient colors when theme changes (without affecting audio playback)
		if (p5Instance) {
			const { start, end } = getGradientColors();
			startColor = p5Instance.color(start[0], start[1], start[2]);
			endColor = p5Instance.color(end[0], end[1], end[2]);
		}
	});

	function loadNewTrack(trackUrl: string) {
		const wasPlaying = sound && sound.isPlaying();
		
		// Keep the current sound playing while loading the new one
		if (p5Instance && typeof p5Instance.loadSound !== 'undefined') {
			const newSound = p5Instance.loadSound(trackUrl, () => {
				if (fft && newSound) {
					// Stop the old sound only after new one is ready
					if (sound) {
						sound.stop();
					}
					
					// Switch to new sound
					sound = newSound;
					fft.setInput(sound);
					sound.setLoop(true);
					
					// Generate new colors for the new track
					const { start, end } = getGradientColors();
					if (p5Instance) {
						startColor = p5Instance.color(start[0], start[1], start[2]);
						endColor = p5Instance.color(end[0], end[1], end[2]);
					}
					
					// If music was playing before OR if isPlaying is true in store, start the new track automatically
					if (wasPlaying || isPlaying) {
						setTimeout(() => {
							sound.play();
							audioStore.update(audio => ({
								...audio,
								isPlaying: true
							}));
							isLoadingTrack = false;
						}, 100);
					} else {
						isLoadingTrack = false;
					}
					
					// Add event listeners for sound state changes
					sound.onended(() => {
						audioStore.update(audio => ({
							...audio,
							isPlaying: false
						}));
					});
				}
			}, (error: any) => {
				isLoadingTrack = false;
			});
		}
	}

	function isLightMode() {
		return currentTheme === 'light';
	}

	let lastGradientIndex = -1;

	function getGradientColors() {
		const currentGradients = isLightMode() ? darkGradients : gradients;
		let newIndex;
		
		// Avoid duplicate colors back to back
		do {
			newIndex = Math.floor(Math.random() * currentGradients.length);
		} while (newIndex === lastGradientIndex && currentGradients.length > 1);
		
		lastGradientIndex = newIndex;
		const result = currentGradients[newIndex];
		return result;
	}

	function togglePlayPause() {
		if (sound) {
			if (sound.isPlaying()) {
				sound.pause();
				audioStore.update(audio => ({
					...audio,
					isPlaying: false
				}));
			} else {
				sound.play();
				audioStore.update(audio => ({
					...audio,
					isPlaying: true
				}));
			}
		} else {
			// If sound isn't loaded yet, just toggle the store
			audioStore.update(audio => ({
				...audio,
				isPlaying: !audio.isPlaying
			}));
		}
	}

	onMount(() => {
		if (!browser || typeof window === 'undefined') {
			return;
		}
		

		// Initialize P5.js sketch
		const sketch = (p: any) => {
			p.setup = () => {
				const cnv = p.createCanvas(1000, 1000);
				cnv.parent(visualizerContainer);
				
				cnv.mouseClicked(() => { 
					const centerX = p.width / 2;
					const centerY = p.height / 2;
					const distance = p.dist(p.mouseX, p.mouseY, centerX, centerY);
					
					if (distance > 30) {
						togglePlayPause();
					}
					return false; // Prevent default
				});
				
				fft = new (window as any).p5.FFT(0.75);
				p.colorMode(p.RGB);
				// Initialize with bright colors immediately
				const { start, end } = getGradientColors();
				startColor = p.color(start[0], start[1], start[2]);
				endColor = p.color(end[0], end[1], end[2]);
				
				p.loop();
				initializeAudioVisualizer(p);
			};

			p.draw = () => {
				p.clear();
				p.translate(p.width / 2, p.height / 2);
				
				const shouldAnimate = isPlaying && sound && sound.isPlaying();
				
				// Always rotate the visualizer for consistent motion
				p.rotate(rotateAngle);
				rotateAngle += 0.001;
				
				p.noFill();
				p.stroke(isLightMode() ? 0 : 255);
				p.ellipse(0, 0, 120, 120);
				
				let spectrum: any, spectrumValues: number[];
				
				if (shouldAnimate && fft) {
					spectrum = fft.analyze();
					spectrumValues = [];
						
					for (let i = fftStartingPoint; i < ((Math.PI * 100) + fftStartingPoint) * 3; i+=3) {
						const val = (spectrum[i] + spectrum[i + 1] + spectrum[i + 2]) / 3;
						spectrumValues.push(val || 0);
					}
					
					// If we don't have enough values, fill with current audio level
					while (spectrumValues.length < 157) {
						spectrumValues.push(spectrum[spectrumValues.length] || 10);
					}
				} else {
					spectrumValues = [];
					for (let i = 0; i < 157; i++) {
						spectrumValues.push(2);
					}
				}
					
				let count = 0;
				let angle = 0.0;
				let incrementPosRight = 0.0;
				let incrementPosLeft = 0.0;
				let increment = 0.0128;
				let lerpy: any;
				
				for (let i = 0; i < p.TWO_PI; i+= 0.04) {
					const x = p.sin(i) * 75;
					const y = p.cos(i) * 75;
					
					if (i < p.PI) {
						lerpy = p.lerpColor(startColor, endColor, incrementPosRight);
						incrementPosRight += increment;
					} else {
						lerpy = p.lerpColor(endColor, startColor, incrementPosLeft);
						incrementPosLeft += increment;
					}
					
					p.stroke(lerpy);
					p.push();
					p.translate(x, y);
					// Always rotate bars for consistent motion
					p.rotate(-angle);
					const barHeight = shouldAnimate ? p.map(spectrumValues[count], 0, 70, 2, 75) : 4;
					p.rect(0, 0, 1, barHeight);
					p.pop();
					count++;
					angle += 0.04;
				}
			};
		};

		function initializeAudioVisualizer(p: any) {
			const defaultSrc = '/src/mp3/infinite-canvas.mp3';
			
			if (typeof p.loadSound !== 'undefined') {
				sound = p.loadSound(defaultSrc, () => {
					if (fft && sound) {
						fft.setInput(sound);
						sound.setLoop(true);
						
						// Add event listeners for sound state changes
						sound.onended(() => {
							audioStore.update(audio => ({
								...audio,
								isPlaying: false
							}));
						});
					}
				}, (error: any) => {
				});
			}
		}

		// Wait for P5.js to load - more robust approach for SvelteKit
		const initP5 = () => {
			if (typeof (window as any).p5 !== 'undefined' && visualizerContainer) {
				p5Instance = new (window as any).p5(sketch);
			} else {
				setTimeout(initP5, 200);
			}
		};
		
		// Start initialization after a brief delay to ensure DOM is ready
		setTimeout(initP5, 500);
	});

	onDestroy(() => {
		if (p5Instance) {
			p5Instance.remove();
		}
		if (sound && sound.isPlaying()) {
			sound.stop();
		}
	});
</script>

<!-- P5.js visualizer container -->
<div 
	id="p5-visualizer-container" 
	bind:this={visualizerContainer}
	style="position: absolute; top: 25%; left: 85%; transform: translate(-50%, -50%); z-index: 5;"
></div>

<!-- Play/pause button overlay -->
<button 
	id="visualizer-play-pause" 
	style="position: absolute; top: 25%; left: 85%; transform: translate(-50%, -50%); z-index: 999; cursor: pointer; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; pointer-events: auto; background: rgba(0,0,0,0.3); border-radius: 50%; border: none;"
	on:click={togglePlayPause}
	aria-label="Play/pause audio"
>
	{#if isPlaying}
		<svg id="pause-icon" width="20" height="20" viewBox="0 0 24 24" fill="white">
			<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
		</svg>
	{:else}
		<svg id="play-icon" width="20" height="20" viewBox="0 0 24 24" fill="white">
			<path d="M8 5v14l11-7z"/>
		</svg>
	{/if}
</button>

<style>
	#p5-visualizer-container {
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
	}
	
	/* Mobile positioning adjustments */
	@media screen and (max-width: 685px) {
		:global(#p5-visualizer-container) {
			top: 25% !important;
			left: 80% !important;
			transform: translate(-50%, -50%) scale(0.8);
		}
		
		:global(#visualizer-play-pause) {
			top: 25% !important;
			left: 80% !important;
		}
	}

	@media screen and (max-width: 580px) {
		:global(#p5-visualizer-container),
		:global(#visualizer-play-pause) {
			display: none !important;
		}
	}
</style>