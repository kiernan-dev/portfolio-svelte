<script lang="ts">
	import { themeStore, audioStore } from '$lib/stores';

	let isSettingsOpen = false;
	let isLightMode = false;
	let isAudioEnabled = false;
	let currentTrack = '/src/mp3/infinite-canvas.mp3';

	themeStore.subscribe(theme => {
		isLightMode = theme === 'light';
	});

	audioStore.subscribe(audio => {
		isAudioEnabled = audio.isPlaying;
		currentTrack = audio.currentTrack;
	});

	function toggleSettings() {
		isSettingsOpen = !isSettingsOpen;
	}

	function toggleTheme() {
		themeStore.update(current => {
			const newTheme = current === 'light' ? 'dark' : 'light';
			
			// Save to localStorage
			if (typeof localStorage !== 'undefined') {
				localStorage.setItem('theme', newTheme);
			}
			
			return newTheme;
		});
	}

	function toggleAudio() {
		audioStore.update(audio => ({
			...audio,
			isPlaying: !audio.isPlaying
		}));
	}

	function changeTrack(event: Event) {
		const target = event.target as HTMLSelectElement;
		audioStore.update(audio => ({
			...audio,
			currentTrack: target.value,
			isPlaying: audio.isPlaying
		}));
	}

	const tracks = [
		{ value: '/src/mp3/infinite-canvas.mp3', label: 'Infinite Canvas' },
		{ value: '/src/mp3/neon-currents.mp3', label: 'Neon Currents' },
		{ value: '/src/mp3/brushstrokes.mp3', label: 'Brushstrokes' },
		{ value: '/src/mp3/pixel-perfect.mp3', label: 'Pixel Perfect' }
	];
</script>

<div class="setting-container {isSettingsOpen ? 'settingactivate' : ''}" id="setting-container">
	<input type="checkbox" id="switchforsetting" checked={isSettingsOpen} on:change={toggleSettings} />
	<label for="switchforsetting" class="needtobeinvert {isLightMode ? 'invertapplied' : ''}" id="labelforsetting" aria-label="settings for sound and appearance"></label>

	<div class="visualmodetogglebuttoncontainer {isSettingsOpen ? 'visualmodeshow' : ''}" id="visualmodetogglebuttoncontainer">
		<input type="checkbox" id="switchforvisualmode" bind:checked={isLightMode} on:change={toggleTheme} />
		<label for="switchforvisualmode" id="labelforvisualmode" aria-label="switch appearance"></label>
	</div>

	<div class="music-selector-container {isSettingsOpen ? 'musicmodeshow' : ''}" id="music-selector-container">
		<canvas id="smallVisualizer" width="200" height="50"></canvas>
		<select id="music-selector" on:change={changeTrack} bind:value={currentTrack} aria-label="select music track">
			{#each tracks as track}
				<option value={track.value}>{track.label}</option>
			{/each}
		</select>
	</div>

	<div class="soundtogglebuttoncontainer {isSettingsOpen ? 'soundmodeshow' : ''}" id="soundtogglebuttoncontainer">
		<input type="checkbox" id="switchforsound" bind:checked={isAudioEnabled} on:change={toggleAudio} />
		<label for="switchforsound" id="labelforsound" aria-label="switch sound" class="needtobeinvert {isLightMode ? 'invertapplied' : ''}"></label>
	</div>
</div>

<style>
	.setting-container {
		width: 60px;
		height: 50px;
		margin-left: 30px;
		display: flex;
		align-items: center;
		gap: 30px;
		padding: 20px 0;
		transform-origin: left;
		transition-duration: 0.5s;
	}

	.settingactivate {
		width: 340px;
	}

	#switchforsetting,
	#switchforsound,
	#switchforvisualmode {
		display: none;
	}

	#labelforsetting {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 20px;
		background-image: url(/src/svg/gear-icon.svg);
		animation: gearRotateAndPulse 8s linear infinite;
		width: 40px;
		height: 40px;
		cursor: pointer;
		transition-duration: 0.5s;
		background-size: 60%;
		background-repeat: no-repeat;
		background-position: center;
	}

	#switchforsetting:checked + #labelforsetting {
		transform: rotate(180deg);
		transition-duration: 0.5s;
	}

	@keyframes gearRotateAndPulse {
		0% { transform: rotate(0deg) scale(1); opacity: 0.4; }
		12.5% { transform: rotate(45deg) scale(1.2); opacity: 1; }
		25% { transform: rotate(90deg) scale(1); opacity: 0.4; }
		37.5% { transform: rotate(135deg) scale(1.2); opacity: 1; }
		50% { transform: rotate(180deg) scale(1); opacity: 0.4; }
		62.5% { transform: rotate(225deg) scale(1.2); opacity: 1; }
		75% { transform: rotate(270deg) scale(1); opacity: 0.4; }
		87.5% { transform: rotate(315deg) scale(1.2); opacity: 1; }
		100% { transform: rotate(360deg) scale(1); opacity: 0.4; }
	}

	.visualmodetogglebuttoncontainer {
		height: fit-content;
		display: flex;
		justify-content: center;
		transform: translate(-50px) scale(0);
		align-items: center;
		width: fit-content;
		transition-duration: 0.3s;
	}

	.visualmodeshow {
		transition-duration: 0.3s;
		transform: translate(0) scale(1);
	}

	#labelforvisualmode {
		position: relative;
		background-image: url(/src/png/crescent-moon.png);
		background-size: 50%;
		width: 40px;
		height: 40px;
		cursor: pointer;
		transition-duration: 0.5s;
		background-repeat: no-repeat;
		background-position: center;
	}

	#switchforvisualmode:checked + #labelforvisualmode {
		transform: rotate(360deg);
		transition-duration: 0.5s;
		background-image: url(/src/png/sun.png);
		background-size: 60%;
	}

	.music-selector-container {
		height: fit-content;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: translate(-90px) scale(0);
		transition-duration: 0.3s;
		position: relative;
	}

	.musicmodeshow {
		transition-delay: 0.05s;
		transition-duration: 0.5s;
		display: inline-block;
		transform: translate(0) scale(1);
	}

	#smallVisualizer {
		position: absolute;
		top: 0;
		left: 0;
		width: 200px;
		height: 50px;
		border-radius: 10px;
		background: rgba(0, 0, 0, 0.3);
		z-index: 1;
		pointer-events: none;
	}

	#music-selector {
		background-color: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 10px;
		color: var(--color-white);
		padding: 12px 16px;
		font-size: 1.4rem;
		min-width: 200px;
		cursor: pointer;
		backdrop-filter: blur(10px);
		transition: all 0.3s ease;
		position: relative;
		z-index: 2;
		height: 50px;
	}

	#music-selector:hover {
		background-color: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.4);
	}

	#music-selector option {
		background-color: var(--color-dark-mode);
		color: var(--color-white);
		padding: 8px;
	}

	.soundtogglebuttoncontainer {
		height: fit-content;
		display: flex;
		justify-content: center;
		transform: translate(-130px) scale(0);
		align-items: center;
		width: fit-content;
		transition-duration: 0.3s;
	}

	.soundmodeshow {
		transition-delay: 0.1s;
		transition-duration: 0.5s;
		display: inline-block;
		transform: translate(0) scale(1);
	}

	#labelforsound {
		position: relative;
		justify-content: center;
		background-image: url(/src/svg/Mute_Icon.svg);
		display: flex;
		align-items: center;
		width: 40px;
		height: 40px;
		cursor: pointer;
		transition-duration: 0.5s;
		background-size: 60%;
		background-repeat: no-repeat;
		background-position: center;
	}

	#switchforsound:checked + #labelforsound {
		transition-duration: 0.5s;
		background-image: url(/src/svg/Speaker_Icon.svg);
		background-size: 50%;
		background-repeat: no-repeat;
		background-position: center;
	}

	.invertapplied {
		filter: invert(1);
	}

	/* Mobile adjustments */
	@media screen and (max-width: 580px) {
		.setting-container {
			margin-left: 0;
			gap: 15px;
		}

		.settingactivate {
			width: 280px;
		}

		#smallVisualizer {
			width: 160px;
			height: 40px;
		}

		#music-selector {
			font-size: 1.1rem;
			padding: 8px 12px;
			min-width: 160px;
			height: 40px;
		}
	}
</style>