<script lang="ts">
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
			<ul class="tech-stack-wrapper">
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
		</div>
	</div>
</section>

<style>
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