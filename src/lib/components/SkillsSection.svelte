<script lang="ts">
	import { onMount } from 'svelte';
	
	const techStack = [
		{ src: './src/png/icons/html.png', alt: 'html skill', tooltip: 'HTML' },
		{ src: './src/png/icons/css.png', alt: 'css skill', tooltip: 'CSS' },
		{ src: './src/png/icons/js.png', alt: 'javascript skill', tooltip: 'JS' },
		{ src: './src/png/icons/tailwind.png', alt: 'tailwind css skill', tooltip: 'TAILWIND' },
		{ src: './src/png/icons/react.png', alt: 'react skill', tooltip: 'REACT' },
		{ src: './src/png/icons/nextjs.png', alt: 'nextjs skill', tooltip: 'NEXTJS' },
		{ src: './src/png/icons/node.png', alt: 'nodejs skill', tooltip: 'NODE' },
		{ src: './src/png/icons/ubuntu.png', alt: 'ubuntu skill', tooltip: 'UBUNTU' },
		{ src: './src/png/icons/astro.png', alt: 'astro skill', tooltip: 'ASTRO' },
		{ src: './src/png/icons/webhooks.png', alt: 'webhooks skill', tooltip: 'WEBHOOKS' },
		{ src: './src/png/icons/github.png', alt: 'github skill', tooltip: 'GITHUB', needInvert: true },
		{ src: './src/png/icons/git.png', alt: 'git skill', tooltip: 'GIT' },
		{ src: './src/png/icons/docker.png', alt: 'docker skill', tooltip: 'DOCKER' },
		{ src: './src/png/icons/jasmine.png', alt: 'jasmine skill', tooltip: 'JASMINE' },
		{ src: './src/png/icons/jest.png', alt: 'jest skill', tooltip: 'JEST' },
		{ src: './src/png/icons/playwright.png', alt: 'playwright skill', tooltip: 'PLAYWRIGHT' },
		{ src: './src/png/icons/postgreSQL.png', alt: 'postgreSQL skill', tooltip: 'POSTGRESQL' },
		{ src: './src/png/icons/supabase.png', alt: 'supabase skill', tooltip: 'SUPABASE' },
		{ src: './src/png/icons/jamstack.png', alt: 'jamstack skill', tooltip: 'JAMSTACK' },
		{ src: './src/png/icons/huggingface.png', alt: 'huggingface skill', tooltip: 'HUGGINGFACE' },
		{ src: './src/png/icons/openrouter.png', alt: 'openrouter skill', tooltip: 'OPENROUTER' },
		{ src: './src/png/icons/gh-copilot.png', alt: 'copilot skill', tooltip: 'COPILOT' },
		{ src: './src/png/icons/deepseek.png', alt: 'deepseek skill', tooltip: 'DEEPSEEK' },
		{ src: './src/png/icons/anthropic.png', alt: 'anthropic skill', tooltip: 'ANTHROPIC' },
		{ src: './src/png/icons/chatGPT.png', alt: 'chatGPT skill', tooltip: 'CHATGPT' },
		{ src: './src/png/icons/canva.png', alt: 'canva skill', tooltip: 'CANVA' },
		{ src: './src/png/icons/figma.png', alt: 'figma skill', tooltip: 'FIGMA' },
		{ src: './src/png/icons/sketch.png', alt: 'sketch skill', tooltip: 'SKETCH' },
		{ src: './src/png/icons/photoshop.png', alt: 'photoshop skill', tooltip: 'PHOTOSHOP' },
		{ src: './src/png/icons/illustrator.png', alt: 'illustrator skill', tooltip: 'ILLUSTRATOR' }
	];

	// Split tech stack into two rows
	const rowLength = Math.ceil(techStack.length / 2);
	const firstRow = [...techStack.slice(0, rowLength), ...techStack.slice(0, rowLength), ...techStack.slice(0, rowLength)];
	const secondRow = [...techStack.slice(rowLength), ...techStack.slice(rowLength), ...techStack.slice(rowLength)];

	let scrollY = 0;
	let isDesktop = false;

	onMount(() => {
		const checkScreenSize = () => {
			isDesktop = window.innerWidth >= 1024;
		};
		
		const handleScroll = () => {
			if (isDesktop) {
				scrollY = window.scrollY;
			}
		};
		
		checkScreenSize();
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', checkScreenSize);
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', checkScreenSize);
		};
	});

	$: firstRowOffset = isDesktop ? (scrollY * 2 - 15050) % 10000 : 0;
	$: secondRowOffset = isDesktop ? -(scrollY * 2) % 10000 : 0;
</script>

<section class="skills-section-container" id="skills">
	<div class="skills-section">
		<div class="section-heading" data-aos="fade-up">
			<h2 class="section-heading-article" aria-label="skills heading">
				&#60;/Skills&#62;
			</h2>
			<p class="sectionHeadingP"></p>
		</div>

		<div class="frontend-dev-section">
			<h3 class="frontend-dev-heading" data-aos="fade-up"
				aria-label="As a frontend a developer these are the skills i have">
				Tech Stack
			</h3>
			
			<!-- Mobile/tablet grid layout (< 1024px) -->
			<ul class="tech-stack-wrapper mobile-layout">
				{#each techStack as tech}
					<li class="tech-stack-box" data-aos="fade-up">
						<img 
							src={tech.src} 
							alt={tech.alt} 
							class="tech-stack-logo {tech.needInvert ? 'needtobeinvert' : ''}" 
						/>
						<span class="tooltip">{tech.tooltip}</span>
					</li>
				{/each}
			</ul>

			<!-- Desktop infinite scroll layout (≥ 1024px) -->
			<div class="infinite-scroll-container desktop-layout">
				<!-- First row scrolling right -->
				<div class="scroll-row" style="transform: translateX({firstRowOffset}px)">
					{#each firstRow as tech}
						<div class="tech-stack-box">
							<img 
								src={tech.src} 
								alt={tech.alt} 
								class="tech-stack-logo {tech.needInvert ? 'needtobeinvert' : ''}" 
							/>
							<span class="tooltip">{tech.tooltip}</span>
						</div>
					{/each}
				</div>
				
				<!-- Second row scrolling left -->
				<div class="scroll-row" style="transform: translateX({secondRowOffset}px)">
					{#each secondRow as tech}
						<div class="tech-stack-box">
							<img 
								src={tech.src} 
								alt={tech.alt} 
								class="tech-stack-logo {tech.needInvert ? 'needtobeinvert' : ''}" 
							/>
							<span class="tooltip">{tech.tooltip}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Mobile layout (default, < 1024px) */
	.mobile-layout {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 50px;
		margin-top: 50px;
	}
	
	.desktop-layout {
		display: none;
	}
	
	/* Desktop layout (≥ 1024px) */
	@media (min-width: 1024px) {
		.mobile-layout {
			display: none;
		}
		
		.desktop-layout {
			display: block;
		}
		
		.skills-section {
			width: 100vw;
		}
	}

	/* Desktop-only infinite scroll styles */
	@media (min-width: 1024px) {
		.infinite-scroll-container {
			width: 100vw;
			margin-top: 50px;
			overflow: hidden;
			position: relative;
			height: 460px;
			margin-left: calc(50% - 50vw);
		}

		.scroll-row {
			display: flex;
			gap: 50px;
			margin-bottom: 50px;
			will-change: transform;
			min-width: calc(200%);
			position: absolute;
		}

		.scroll-row:first-child {
			top: 60px;
		}

		.scroll-row:last-child {
			top: 260px;
		}

		.scroll-row .tech-stack-box {
			flex-shrink: 0;
			width: 160px;
			height: 160px;
			background-image: linear-gradient(to bottom right, var(--tech-stack-box-first-color), var(--tech-stack-box-second-color));
			border: 1px solid var(--tech-stack-box-border-color);
			border-radius: 30px;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			transition: transform 0.3s ease;
		}

		.scroll-row .tech-stack-box:hover {
			transform: scale(1.05);
		}

		.scroll-row .tech-stack-box img {
			width: 80%;
			height: auto;
		}

		.scroll-row .tech-stack-box .tooltip {
			z-index: 100;
		}

	}

	.needtobeinvert {
		filter: invert(1);
	}

	.skills-section-container {
		padding-top: 150px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.skills-section {
		width: 80vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.section-heading {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.section-heading-article {
		font-size: 3rem;
		font-family: 'Fira Code', monospace;
		font-weight: 500;
		background-image: linear-gradient(90deg, var(--static-heading-gradient-blue), var(--static-heading-gradient-pink));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.sectionHeadingP {
		width: 300px;
		height: 1px;
		background-image: linear-gradient(90deg, var(--static-heading-gradient-blue), var(--static-heading-gradient-pink));
	}
</style>