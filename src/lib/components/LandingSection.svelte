<script lang="ts">
	import { onMount } from 'svelte';
	import { themeStore, audioStore } from '$lib/stores';
	import AudioVisualizer from './AudioVisualizer.svelte';
	import SettingsPanel from './SettingsPanel.svelte';
	import AOS from 'aos';

	let themeValue = 'dark';
	let audioValue = { isPlaying: false, currentTrack: '/src/mp3/infinite-canvas.mp3', volume: 1 };
	let showScrollArrow = true;

	themeStore.subscribe(value => { themeValue = value; });
	audioStore.subscribe(value => { audioValue = value; });

	onMount(() => {
		// Initialize AOS animations with mobile-friendly settings
		AOS.init({
			duration: 800,
			easing: 'ease-out',
			once: true,
			offset: 50,
			disable: false,
			startEvent: 'DOMContentLoaded',
			initClassName: 'aos-init',
			animatedClassName: 'aos-animate',
			useClassNames: false,
			disableMutationObserver: false,
			debounceDelay: 50,
			throttleDelay: 99,
		});

		// Handle scroll arrow visibility
		const handleScroll = () => {
			const heroSection = document.getElementById('home');
			const aboutSection = document.getElementById('about');
			
			if (heroSection && aboutSection) {
				const heroRect = heroSection.getBoundingClientRect();
				const aboutRect = aboutSection.getBoundingClientRect();
				
				// Show arrow when hero is visible, hide when about section comes into view
				showScrollArrow = heroRect.bottom > window.innerHeight * 0.3 && aboutRect.top > window.innerHeight * 0.5;
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial check

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function handleEmailClick() {
		window.location.href = 'mailto:kiernan.devsignr@gmail.com';
	}

	function openResume() {
		window.open('/kiernan-resume-2025-r.html', '_blank');
	}

	function scrollToAbout() {
		const aboutSection = document.getElementById('about');
		if (aboutSection) {
			aboutSection.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}
</script>

<section class="landing-page-container" id="home">
	<AudioVisualizer />
	
	<div class="text-content">
		<article id="hello-friend" class="hero-content">
			<p class="jello">Hello</p>
			<p class="jello">(</p>
			<p class="jello">)</p>
			<p class="jello">;</p>
			&nbsp;
			<p class="jello">I</p>
			<p class="jello">'</p>
			<p class="jello">m</p>
		</article>
		
		<article id="name" class="hero-content">
			<p class="jello">S</p>
			<p class="jello">t</p>
			<p class="jello">e</p>
			<p class="jello">v</p>
			<p class="jello">e</p>
			<p class="jello">n</p>
			&nbsp;
			<p class="jello">Kiernan</p>
			<p class="jello">.</p>
		</article>

		<article id="work" class="hero-content">
			<div>
				<p class="jello">Full</p>
				<p class="jello">-</p>
				<p class="jello">S</p>
				<p class="jello">t</p>
				<p class="jello">a</p>
				<p class="jello">c</p>
				<p class="jello">k</p>
			</div>
			<div>
				<p class="jello">Dev</p>
				<p class="jello">e</p>
				<p class="jello">l</p>
				<p class="jello">o</p>
				<p class="jello">p</p>
				<p class="jello">e</p>
				<p class="jello">r</p>
			</div>
		</article>
		
		<p id="info-para" class="hero-content">
			Senior JavaScript Engineer who's been crafting web applications for 20+ years. From Fortune 500 brands 
			to innovative startups. My goal is to build products that align with genuine user needs and make a tangible 
			difference in how people interact with technology.
		</p>
		
		<div class="contact-btn-div hero-content">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-interactive-supports-focus -->
			<div tabindex="-1" on:click={handleEmailClick} role="button">
				<button class="letsTalkBtn">
					<p class="letsTalkBtn-text">Let's Talk!</p>
					<span class="letsTalkBtn-BG"></span>
				</button>
			</div>
			
			<!-- Resume button -->
			<button class="resume-btn" id="resume-btn" on:click={openResume}>
				<div class="sign">
					<svg viewBox="0 0 640 512">
						<path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
					</svg>
				</div>
				<div class="text">Resume</div>
			</button>
			
			<SettingsPanel />
		</div>
	</div>
	
	<!-- Mobile Scroll Arrow -->
	{#if showScrollArrow}
		<div class="scroll-arrow-container">
			<button class="scroll-arrow" on:click={scrollToAbout} aria-label="Scroll to about section">
				<svg viewBox="0 0 24 24" width="24" height="24">
					<path d="M7 10l5 5 5-5z" fill="currentColor"/>
				</svg>
			</button>
		</div>
	{/if}
</section>

<style>
	.landing-page-container {
		width: 100%;
		height: calc(100vh - 115px);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.text-content {
		display: flex;
		flex-direction: column;
		width: 80vw;
		height: 100%;
		align-items: flex-start;
		justify-content: center;
		z-index: 10;
	}

	#hello-friend {
		font-size: 3.5rem;
		font-weight: 600;
		width: fit-content;
		display: flex;
		align-items: flex-end;
		color: var(--color-white);
		font-family: 'Fira Code', monospace;
	}

	#name {
		font-size: 8rem;
		width: fit-content;
		display: flex;
		font-weight: 700;
		align-items: flex-start;
		background: linear-gradient(-45deg, var(--color-light-blue), var(--color-light-purple), var(--color-light-blue), var(--color-light-purple));
		background-clip: text;
		-webkit-background-clip: text;
		background-size: 400% 400%;
		-webkit-animation: 3s infinite gradient;
		animation: 3s infinite gradient;
		-webkit-text-fill-color: transparent;
	}

	@keyframes gradient {
		0%, 100% { background-position: 0 50%; }
		50% { background-position: 100% 50%; }
	}

	#work {
		font-size: 8rem;
		width: fit-content;
		display: flex;
		font-weight: 700;
		align-items: flex-start;
		flex-wrap: wrap;
		color: var(--color-white);
	}

	#work div {
		display: flex;
		margin: 0 12px 0 0;
	}

	.jello:hover {
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-color: #03e6ff;
		-webkit-animation: 0.9s both jello-vertical;
		animation: 0.9s both jello-vertical;
	}

	@keyframes jello-vertical {
		0%, 100% { transform: scale3d(1, 1, 1); }
		30% { transform: scale3d(0.75, 1.25, 1); }
		40% { transform: scale3d(1.25, 0.75, 1); }
		50% { transform: scale3d(0.85, 1.15, 1); }
		65% { transform: scale3d(1.05, 0.95, 1); }
		75% { transform: scale3d(0.95, 1.05, 1); }
	}

	#info-para {
		width: 100%;
		padding-top: 30px;
		color: var(--color-ddd-color);
		font-weight: 400;
		font-size: 3rem;
	}

	.contact-btn-div {
		width: 100%;
		padding-top: 50px;
		height: fit-content;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.letsTalkBtn {
		position: relative;
		border: none;
		width: 180px;
		height: 40px;
		border-radius: 0;
		cursor: pointer;
		transition: 0.3s;
		background-color: transparent;
	}

	.letsTalkBtn-text {
		width: 100%;
		height: 100%;
		background-color: rgba(230, 230, 230, 0.466);
		border: none;
		border-radius: 7px;
		backdrop-filter: blur(5px);
		color: #000;
		display: flex;
		align-items: center;
		justify-content: center;
		letter-spacing: 0.8px;
		font-weight: 700;
	}

	.letsTalkBtn-BG {
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(150deg, #71cbff, #8000ff);
		z-index: -1;
		left: 6px;
		top: 6px;
		border-radius: 7px;
		pointer-events: none;
		transition: 0.3s;
	}

	.letsTalkBtn:hover {
		transform: translate(-2px, -2px);
	}

	.letsTalkBtn:hover .letsTalkBtn-BG {
		transform: translate(2px, 2px);
	}

	.letsTalkBtn:active {
		transform: translate(7px, 7px);
	}

	.letsTalkBtn:active .letsTalkBtn-BG {
		transform: translate(-7px, -7px);
	}

	.resume-btn {
		margin: 5px 0 0 50px;
		justify-content: flex-start;
		width: 45px;
		height: 45px;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
		background: linear-gradient(82.3deg, #965de9 10.8%, #6358ee 94.3%);
		position: relative;
		display: flex;
		align-items: center;
		transition-duration: 0.3s;
		overflow: hidden;
	}

	.sign {
		width: 100%;
		justify-content: center;
		display: flex;
		align-items: center;
		transition-duration: 0.3s;
	}

	.sign svg {
		width: 17px;
	}

	.sign svg path {
		fill: white;
	}

	.text {
		position: absolute;
		right: 0;
		width: 0%;
		opacity: 0;
		color: #fff;
		font-size: 1em;
		font-weight: 600;
		transition-duration: 0.3s;
	}

	.resume-btn:hover {
		width: 130px;
		border-radius: 40px;
		transition-duration: 0.3s;
	}

	.resume-btn:hover .sign {
		width: 30%;
		transition-duration: 0.3s;
		padding-left: 20px;
	}

	.resume-btn:hover .text {
		opacity: 1;
		width: 70%;
		transition-duration: 0.3s;
		padding-right: 10px;
	}

	.resume-btn:active {
		transform: translate(2px, 2px);
	}

	.scroll-arrow-container {
		display: none;
		position: fixed;
		bottom: 30px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1000;
	}

	.scroll-arrow {
		background: rgba(255, 255, 255, 0.1);
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 50%;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
		backdrop-filter: blur(10px);
		animation: bounce 2s infinite;
	}

	.scroll-arrow:hover {
		background: rgba(255, 255, 255, 0.2);
		border-color: rgba(255, 255, 255, 0.5);
		transform: translateY(-3px);
	}

	.scroll-arrow svg {
		color: #fff;
		transition: transform 0.3s ease;
	}

	.scroll-arrow:hover svg {
		transform: translateY(2px);
	}

	@keyframes bounce {
		0%, 20%, 50%, 80%, 100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		60% {
			transform: translateY(-5px);
		}
	}

	/* Mobile styles */
	@media screen and (max-width: 685px) {
		.landing-page-container {
			padding-top: 20rem;
		}
		
		.text-content {
			width: 95%;
			padding: 0 20px;
		}

		#name, #work {
			font-size: 5.5rem;
			max-width: 100%;
		}

		#info-para {
			font-size: 2.4rem;
		}
	}

	@media screen and (max-width: 768px) {
		.letsTalkBtn {
			display: none;
		}
		
		.resume-btn {
			width: 100%;
			max-width: 300px;
			height: 50px;
			border-radius: 12px;
			margin: 0;
			background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
			justify-content: center;
			font-size: 1.6rem;
			font-weight: 600;
			text-transform: uppercase;
			letter-spacing: 1px;
		}
		
		.resume-btn .sign {
			width: auto;
			padding-left: 0;
			margin-right: 10px;
		}
		
		.resume-btn .text {
			position: static;
			opacity: 1;
			width: auto;
			padding-right: 0;
			color: #fff;
		}
		
		.resume-btn:hover {
			width: 100%;
			max-width: 300px;
			border-radius: 12px;
		}
	}

	@media screen and (max-width: 580px) {
		.scroll-arrow-container {
			display: block;
		}
		
		.hero-content {
			display: flex !important;
			visibility: visible !important;
		}
		
		.text-content {
			width: 100%;
			max-width: 100%;
			padding: 0 20px;
			align-items: flex-start;
			justify-content: center;
		}

		#hello-friend {
			font-size: 3.5rem;
			flex-wrap: wrap;
			margin-bottom: 1rem;
		}

		#name, #work {
			line-height: 1.1;
			flex-wrap: wrap;
			max-width: 100%;
			width: auto;
			margin-bottom: 0.5rem;
		}

		#hello-friend .jello {
			font-size: 2.5rem;
		}

		#name .jello {
			font-size: 10rem;
		}

		#work .jello {
			font-size: 4rem;
		}

		#info-para {
			font-size: 2.6rem;
			padding-top: 25px;
			line-height: 1.5;
			font-weight: 500;
		}

		.contact-btn-div {
			padding-top: 30px;
			flex-direction: column;
			align-items: flex-start;
			gap: 20px;
		}

		.letsTalkBtn {
			width: 140px;
			height: 35px;
			transform: scale(0.8);
			transform-origin: left;
		}

		.letsTalkBtn-text {
			font-size: 1.8rem;
			font-weight: 900;
		}
	}
</style>