<script lang="ts">
	import { onMount } from 'svelte';
	import { themeStore, audioStore, navigationStore, cursorStore } from '$lib/stores';
	import Header from '$lib/components/Header.svelte';
	import LandingSection from '$lib/components/LandingSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import SkillsSection from '$lib/components/SkillsSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CustomCursor from '$lib/components/CustomCursor.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import { browser } from '$app/environment';

	let showBackToTop = false;

	onMount(() => {
		// Apply theme classes to body
		themeStore.subscribe(theme => {
			if (browser) {
				if (theme === 'light') {
					document.body.classList.add('light-mode');
				} else {
					document.body.classList.remove('light-mode');
				}
			}
		});

		// Handle scroll events for back to top button and active navigation
		function handleScroll() {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			showBackToTop = scrollTop > 400;

			// Update active section
			const sections = document.querySelectorAll('section');
			let currentSection = '';
			
			sections.forEach(section => {
				const rect = section.getBoundingClientRect();
				if (rect.top <= 200) {
					currentSection = section.id;
				}
			});

			navigationStore.update(nav => ({
				...nav,
				activeSection: currentSection
			}));
		}

		// Throttled scroll handler
		let scrollTimeout: number;
		const throttledScroll = () => {
			if (!scrollTimeout) {
				scrollTimeout = setTimeout(() => {
					handleScroll();
					scrollTimeout = 0;
				}, 16);
			}
		};

		window.addEventListener('scroll', throttledScroll);

		// Cursor tracking
		function handleMouseMove(e: MouseEvent) {
			cursorStore.set({
				x: e.clientX,
				y: e.clientY,
				isVisible: true
			});
		}

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('scroll', throttledScroll);
			document.removeEventListener('mousemove', handleMouseMove);
		};
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:head>
	<title>Steven Kiernan | Senior Javascript Engineer</title>
	<meta name="description" content="Steven Kiernan | Senior Javascript Engineer - Portfolio showcasing AI-amplified development, full-stack expertise, and 20+ years of creative problem-solving." />
	<meta name="keywords" content="steven kiernan,kiernan portfolio,creative technical architect,ai amplified development,full stack developer,frontend architect,kiernan devsignr,javascript,react,nextjs,python" />
	<meta name="author" content="Steven Kiernan" />
	<meta property="og:image" content="/src/png/Preview-card-min.png" />
	<meta property="og:title" content="Steven Kiernan | Senior Javascript Engineer" />
	<meta property="og:description" content="Senior Javascript Engineer with 20+ years of experience. AI-amplified full-stack development, frontend mastery, and creative problem-solving." />
	<meta property="og:url" content="https://kiernan.studio" />
	<meta property="og:site_name" content="Steven Kiernan Portfolio" />
	
	<!-- External resources -->
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Passions+Conflict&family=Orbitron&family=Fira+Code&family=Six+Caps" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/addons/p5.sound.min.js"></script>
	<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
</svelte:head>

<CustomCursor />
<Header />
<MobileMenu />

<main>
	<div class="blob"></div>
	
	<LandingSection />
	<AboutSection />
	<ProjectsSection />
	<SkillsSection />
	<ContactSection />
</main>

<Footer />

{#if showBackToTop}
	<BackToTop on:click={scrollToTop} />
{/if}

<style>
	main {
		width: 100%;
		height: fit-content;
		position: relative;
	}

	.blob {
		position: fixed;
		right: -15%;
		top: 0;
		background-color: var(--color-light-purple);
		width: 600px;
		height: 100vh;
		filter: blur(300px);
		opacity: 0.3;
		animation: 1s linear infinite alternate-reverse breath;
		z-index: 0;
		border-radius: 50%;
	}

	@keyframes breath {
		from { opacity: 0.3; }
		to { opacity: 0.5; }
	}
</style>