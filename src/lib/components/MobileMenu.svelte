<script lang="ts">
	import { navigationStore } from '$lib/stores';

	let isMobileMenuOpen = false;
	let activeSection = '';

	navigationStore.subscribe(nav => {
		isMobileMenuOpen = nav.isMobileMenuOpen;
		activeSection = nav.activeSection;
	});

	function toggleMobileMenu() {
		navigationStore.update(nav => ({
			...nav,
			isMobileMenuOpen: !nav.isMobileMenuOpen
		}));
		
		// Toggle body scroll
		document.body.classList.toggle('stopscrolling');
	}

	function hideMobileMenu() {
		navigationStore.update(nav => ({
			...nav,
			isMobileMenuOpen: false
		}));
		
		document.body.classList.remove('stopscrolling');
	}

	function scrollToSection(sectionId: string) {
		hideMobileMenu();
		
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}
</script>

<div class="hamburger" id="hamburger" data-aos="fade">
	<div class="hamburgerbase">
		<button 
			id="hamburger-button" 
			on:click={toggleMobileMenu} 
			tabindex="0" 
			aria-label="Menu Button"
		>
			<span class="burger-bar {isMobileMenuOpen ? 'hamburger-animation1' : ''}" id="burger-bar1"></span>
			<span class="burger-bar {isMobileMenuOpen ? 'hamburger-animation2' : ''}" id="burger-bar2"></span>
			<span class="burger-bar {isMobileMenuOpen ? 'hamburger-animation3' : ''}" id="burger-bar3"></span>
		</button>
	</div>
</div>

<div class="mobiletogglemenu {isMobileMenuOpen ? 'show-toggle-menu' : ''}" id="mobiletogglemenu">
	<ul class="mobile-navbar-tabs-ul" id="mobile-ul">
		<li 
			id="aboutme-mobile-tab" 
			class="mobile-navbar-tabs-li about {activeSection === 'about' ? 'activeThismobiletab' : ''}"
		>
			<button type="button" on:click={() => scrollToSection('about')} aria-label="Navigate to about section">
				&#60;/AboutMe&#62;
			</button>
		</li>
		<li 
			id="projects-mobile-tab" 
			class="mobile-navbar-tabs-li projects {activeSection === 'projects' ? 'activeThismobiletab' : ''}"
		>
			<button type="button" on:click={() => scrollToSection('projects')} aria-label="Navigate to projects section">
				&#60;/Projects&#62;
			</button>
		</li>
		<li 
			id="skills-mobile-tab" 
			class="mobile-navbar-tabs-li skills {activeSection === 'skills' ? 'activeThismobiletab' : ''}"
		>
			<button type="button" on:click={() => scrollToSection('skills')} aria-label="Navigate to skills section">
				&#60;/Skills&#62;
			</button>
		</li>
		<li 
			id="contact-mobile-tab" 
			class="mobile-navbar-tabs-li contact {activeSection === 'contact' ? 'activeThismobiletab' : ''}"
		>
			<button type="button" on:click={() => scrollToSection('contact')} aria-label="Navigate to contact section">
				&#60;/Contact&#62;
			</button>
		</li>
	</ul>
</div>

<style>
	.hamburger {
		display: none;
	}

	.mobiletogglemenu {
		display: none;
	}

	@media screen and (max-width: 685px) {
		.hamburger {
			display: flex;
			position: fixed;
			top: 0;
			width: 100%;
			height: 115px;
			align-items: flex-end;
			justify-content: center;
			z-index: 9998;
			background-color: transparent;
		}
		
		.hamburgerbase {
			width: 80%;
			height: 80px;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			padding: 20px;
		}
		
		#hamburger-button {
			font-size: 3rem;
			font-weight: 800;
			width: 4.5rem;
			height: 3.5rem;
			border: none;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			background-color: transparent;
			position: relative;
			transition: all 0.3s ease;
		}

		#hamburger-button::before {
			content: '';
			position: absolute;
			width: 5.5rem;
			height: 5.5rem;
			background: rgba(17, 17, 27, 0.6);
			border-radius: 50%;
			backdrop-filter: blur(20px);
			z-index: -1;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			transition: all 0.3s ease;
		}

		#hamburger-button:hover::before {
			background: rgba(17, 17, 27, 0.7);
			transform: translate(-50%, -50%) scale(1.05);
		}
		
		.burger-bar {
			height: 3px;
			border-radius: 0;
			transition-duration: 0.3s;
			background-color: var(--color-white);
		}
		
		#burger-bar1,
		#burger-bar3 {
			width: 60%;
		}
		
		#burger-bar2 {
			width: 100%;
		}
		
		.hamburger-animation1 {
			transform: rotate(45deg) scaleX(1.7);
			transition-duration: 0.3s;
			transform-origin: left;
		}

		.hamburger-animation2 {
			transform: scaleX(0);
		}

		.hamburger-animation3 {
			transform: rotateZ(-45deg) scaleX(1.7);
			transform-origin: left;
			transition-duration: 0.3s;
		}

		.mobiletogglemenu {
			background-color: transparent;
			z-index: 9990;
			height: 100%;
			width: 100%;
			position: fixed;
			top: 0;
			right: 0;
			list-style: none;
			font-size: 2rem;
			cursor: pointer;
			display: flex;
			transform: translate(1000px);
			transition-duration: 1s;
		}

		.show-toggle-menu {
			transform: translate(0);
			transition-duration: 0.6s;
		}

		.mobile-navbar-tabs-ul {
			background: rgba(17, 17, 27, 0.6);
			backdrop-filter: blur(20px);
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 70px;
			box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
		}

		.mobile-navbar-tabs-li {
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 4rem;
			font-weight: 600;
			position: relative;
			cursor: pointer;
			font-family: 'Fira Code', monospace;
			height: fit-content;
			width: fit-content;
			padding: 1rem 0;
		}

		.mobile-navbar-tabs-ul button {
			color: var(--color-white);
			text-decoration: none;
			background: none;
			border: none;
			font-size: inherit;
			font-family: inherit;
			cursor: pointer;
		}

		.activeThismobiletab:before {
			content: "";
			position: absolute;
			height: 10px;
			width: 10px;
			left: -20px;
			border-radius: 50%;
			background-color: var(--color-white);
		}

		:global(.stopscrolling) {
			overflow: hidden;
		}
	}
</style>