<script lang="ts">
	import { navigationStore } from '$lib/stores';

	let activeSection = '';
	
	navigationStore.subscribe(nav => {
		activeSection = nav.activeSection;
	});

	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<header>
	<div class="navbar" id="navbar">
		<div class="logo" aria-label="steven kiernan logo">
			<button class="logo-top" on:click={scrollToTop} type="button" aria-label="Scroll to top">
				<img src="/favicon.png" alt="animation-head" id="nav-avatar"/>
			</button>
		</div>
		<div class="navbar-tabs" id="navbar-tabs">
			<ul class="navbar-tabs-ul">
				<li class="about navbar-tabs-li {activeSection === 'about' ? 'activeThistab' : ''}">
					<button type="button" on:click={() => scrollToSection('about')} aria-label="Navigate to about section">
						&#60;/AboutMe&#62;
					</button>
				</li>
				<li class="projects navbar-tabs-li {activeSection === 'projects' ? 'activeThistab' : ''}">
					<button type="button" on:click={() => scrollToSection('projects')} aria-label="Navigate to projects section">
						&#60;/Projects&#62;
					</button>
				</li>
				<li class="skills navbar-tabs-li {activeSection === 'skills' ? 'activeThistab' : ''}">
					<button type="button" on:click={() => scrollToSection('skills')} aria-label="Navigate to skills section">
						&#60;/Skills&#62;
					</button>
				</li>
				<li class="contact navbar-tabs-li {activeSection === 'contact' ? 'activeThistab' : ''}">
					<button type="button" on:click={() => scrollToSection('contact')} aria-label="Navigate to contact section">
						&#60;/Contact&#62;
					</button>
				</li>
			</ul>
		</div>
	</div>
</header>

<style>
	header {
		width: 100%;
		height: 115px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}

	.navbar {
		background-image: linear-gradient(to bottom right, var(--tech-stack-box-first-color), var(--tech-stack-box-second-color));
		backdrop-filter: blur(10px);
		height: 80px;
		width: 80vw;
		padding: 0 20px 0 0;
		justify-content: space-between;
		z-index: 999;
		border: 1px solid var(--color-navbarBorder-dark);
		border-radius: 50px;
		display: flex;
		align-items: center;
		position: fixed;
		overflow: hidden;
	}

	.navbar-tabs,
	.navbar-tabs-ul {
		height: 100%;
		align-items: center;
	}

	.logo,
	.navbar-tabs-ul li {
		position: relative;
		display: flex;
	}

	.navbar-tabs {
		display: flex;
		width: 80%;
	}

	.navbar-tabs-ul {
		width: 100%;
		display: flex;
		list-style: none;
		justify-content: flex-end;
		gap: 80px;
		color: var(--color-white);
	}

	.navbar-tabs-ul li {
		width: fit-content;
		height: 30px;
		text-align: center;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
	}

	.navbar-tabs-ul li:hover:before {
		content: "";
		position: absolute;
		border-radius: 5px;
		z-index: -1;
		background-color: var(--color-white);
		height: 10px;
		width: 10px;
		left: -20px;
	}

	.navbar-tabs-ul button {
		color: var(--color-white);
		font-weight: 100;
		text-decoration: none;
		background: none;
		border: none;
		font-size: inherit;
		font-family: inherit;
		cursor: pointer;
	}

	.logo {
		width: 10%;
		height: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		user-select: none;
		overflow: hidden;
	}

	.logo-top {
		width: 100%;
		height: 100%;
		align-items: flex-start;
		display: flex;
		transform-origin: bottom;
		position: relative;
		cursor: pointer;
		background: none;
		border: none;
		padding: 0;
	}

	.logo-top img {
		height: 100%;
		z-index: 2;
	}

	.logo:hover {
		filter: drop-shadow(0 0 10px #cf30ff) drop-shadow(0 0 20px #cf30ff);
		transition: filter 0.3s ease;
		transition-duration: 1s;
	}

	.activeThistab:before {
		content: "";
		position: absolute;
		border-radius: 50%;
		z-index: -1;
		background-color: var(--color-white);
		height: 10px;
		width: 10px;
		left: -20px;
	}

	/* Media queries */
	@media screen and (max-width: 875px) {
		.navbar-tabs-ul {
			gap: 50px;
		}
	}

	@media screen and (max-width: 725px) {
		.navbar-tabs-ul {
			gap: 40px;
		}
	}

	@media screen and (max-width: 685px) {
		.navbar-tabs-ul {
			display: none;
		}
	}

	@media screen and (max-width: 580px) {
		.navbar {
			display: none;
		}
	}
</style>