<script lang="ts">
	const projects = [
		{
			title: 'VentureMap',
			subtitle: 'AI-Powered Business Plan Generator',
			description: 'AI-powered business plan and pitch deck generator with multi-provider fallback (Claude, OpenAI, Gemini). React 19 + TypeScript frontend, Express.js backend with rate limiting and CORS. Features interactive chat assistant, templates, and flexible export options.',
			techStack: [
				{ src: 'src/png/icons/vite.png', alt: 'vite logo' },
				{ src: 'src/png/icons/express.png', alt: 'express logo' },
				{ src: 'src/png/icons/react.png', alt: 'react logo' },
				{ src: 'src/png/icons/typescript.png', alt: 'typescript logo' },
				{ src: 'src/png/icons/tailwind.png', alt: 'tailwind logo' },
				{ src: 'src/png/icons/openrouter.png', alt: 'openrouter logo' },
				{ src: 'src/png/icons/anthropic.png', alt: 'anthropic logo' }
			],
			githubUrl: 'https://github.com/kiernan-dev/venture-map.git',
			liveUrl: 'https://kiernan.studio/venturemap',
			imageUrl: 'src/webp/proj-venmap.webp',
			isFirstProject: true
		},
		{
			title: 'Keygen',
			subtitle: 'Cryptographic Key Generator',
			description: 'Cryptographic key generator using Web Crypto API for secure client-side generation of API keys, JWT secrets, UUIDs, and passwords. React + TypeScript with zero data storage.',
			techStack: [
				{ src: 'src/png/icons/vite.png', alt: 'vite logo' },
				{ src: 'src/png/icons/react.png', alt: 'react logo' },
				{ src: 'src/png/icons/typescript.png', alt: 'typescript logo' },
				{ src: 'src/png/icons/tailwind.png', alt: 'tailwind logo' },
				{ src: 'src/png/icons/framer-motion.png', alt: 'framer motion logo' },
				{ src: 'src/png/icons/react-router.png', alt: 'react router logo' }
			],
			githubUrl: 'https://github.com/kiernan-dev/keygen.git',
			liveUrl: 'https://kiernan.studio/keygen',
			imageUrl: 'src/webp/proj-keygen.webp',
			isFirstProject: false
		},
		{
			title: 'Cardography',
			subtitle: 'Interactive Design History Showcase',
			description: 'A comprehensive visual journey through 85 design movements spanning from 1850 to present day. Features dynamic filtering, card-flip interactions, and immersive storytelling that transforms design history education into an engaging digital experience.',
			techStack: [
				{ src: 'src/png/icons/html.png', alt: 'html logo' },
				{ src: 'src/png/icons/css.png', alt: 'css logo' },
				{ src: 'src/png/icons/js.png', alt: 'javascript logo' }
			],
			githubUrl: 'https://github.com/kiernan-dev/cardography.git',
			liveUrl: 'https://kiernan.studio/cardography',
			imageUrl: 'src/webp/proj-cardography.webp',
			isFirstProject: false
		},
		{
			title: 'ColorStack',
			subtitle: 'Color Palette Generator',
			description: 'React-based color palette generator with intuitive hex code management and export functionality. Demonstrates advanced frontend development with clean UI/UX design and practical utility for designers and developers.',
			techStack: [
				{ src: 'src/png/icons/vite.png', alt: 'vite logo' },
				{ src: 'src/png/icons/react.png', alt: 'react logo' },
				{ src: 'src/png/icons/typescript.png', alt: 'typescript logo' },
				{ src: 'src/png/icons/tailwind.png', alt: 'tailwind logo' },
				{ src: 'src/png/icons/react-router.png', alt: 'react router logo' }
			],
			githubUrl: 'https://github.com/kiernan-dev/colorstack.git',
			liveUrl: 'https://kiernan.studio/colorstack',
			imageUrl: 'src/webp/proj-colorstack.webp',
			isFirstProject: false
		},
		{
			title: 'Memorium',
			subtitle: 'AI-Powered Memorial Platform',
			description: 'Compassionate AI platform for generating personalized eulogies, condolence messages, and memorial tributes. Next.js application with private tribute walls, QR code sharing, and empathetic AI writing assistance. Privacy-first architecture designed for sensitive, meaningful digital experiences.',
			techStack: [
				{ src: 'src/png/icons/astro.png', alt: 'astro logo' },
				{ src: 'src/png/icons/nodejs.png', alt: 'node.js logo' },
				{ src: 'src/png/icons/tailwind.png', alt: 'tailwind logo' },
				{ src: 'src/png/icons/openrouter.png', alt: 'openrouter logo' },
				{ src: 'src/png/icons/anthropic.png', alt: 'anthropic logo' },
				{ src: 'src/png/icons/pnpm.png', alt: 'pnpm logo' }
			],
			githubUrl: 'https://github.com/kiernan-dev/memorium.git',
			liveUrl: 'https://kiernan.studio/memorium',
			imageUrl: 'src/webp/proj-memorium.webp',
			isFirstProject: false
		},
		{
			title: 'DockerPimp',
			subtitle: 'Interactive Docker Command Reference',
			description: 'Comprehensive reference application featuring 79+ categorized commands with interactive filtering and search. Demonstrates full-stack development expertise with modern UI/UX design, showcasing systematic organization of technical documentation and developer-focused user experience optimization.',
			techStack: [
				{ src: 'src/png/icons/nextjs.png', alt: 'nextjs logo' },
				{ src: 'src/png/icons/typescript.png', alt: 'typescript logo' },
				{ src: 'src/png/icons/tailwind.png', alt: 'tailwind logo' },
				{ src: 'src/png/icons/framer-motion.png', alt: 'framer-motion logo' },
				{ src: 'src/png/icons/pnpm.png', alt: 'pnpm logo' }
			],
			githubUrl: 'https://github.com/kiernan-dev/docker-pimp.git',
			liveUrl: 'https://kiernan.studio/dockerpimp',
			imageUrl: 'src/webp/proj-dockerpimp.webp',
			isFirstProject: false
		},
		{
			title: 'HealthWise',
			subtitle: 'Natural Health Assistant',
			description: 'AI-powered wellness platform built with modern web technologies, featuring conversational health guidance and natural remedy recommendations. Showcases advanced AI integration, responsive design, and user-centric health information architecture with safety-first approaches to alternative wellness education.',
			techStack: [
				{ src: 'src/png/icons/vite.png', alt: 'vite logo' },
				{ src: 'src/png/icons/react.png', alt: 'react logo' },
				{ src: 'src/png/icons/typescript.png', alt: 'typescript logo' },
				{ src: 'src/png/icons/tailwind.png', alt: 'tailwind logo' },
				{ src: 'src/png/icons/openrouter.png', alt: 'openrouter logo' },
				{ src: 'src/png/icons/pnpm.png', alt: 'pnpm logo' }
			],
			githubUrl: 'https://github.com/kiernan-dev/healthwise.git',
			liveUrl: 'https://kiernan.studio/healthwise',
			imageUrl: 'src/webp/proj-healthwise.webp',
			isFirstProject: false
		},
		{
			title: 'StoryBook',
			subtitle: 'Interactive AI Story Generator',
			description: 'AI-powered storytelling platform with narrative generation, AI cover art, interactive editing, and PDF export. React-based creative writing tool demonstrating advanced AI integration and user-centered design',
			techStack: [
				{ src: 'src/png/icons/vite.png', alt: 'vite logo' },
				{ src: 'src/png/icons/react.png', alt: 'react logo' },
				{ src: 'src/png/icons/typescript.png', alt: 'typescript logo' },
				{ src: 'src/png/icons/tailwind.png', alt: 'tailwind logo' },
				{ src: 'src/png/icons/openrouter.png', alt: 'openrouter logo' },
				{ src: 'src/png/icons/pnpm.png', alt: 'pnpm logo' }
			],
			githubUrl: 'https://github.com/kiernan-dev/storybook.git',
			liveUrl: 'https://kiernan.studio/storybook',
			imageUrl: 'src/webp/proj-storybook.webp',
			isFirstProject: false
		}
	];
</script>

<section class="projects-section-container" id="projects">
	<div class="projects-section-div">
		<div class="section-heading" data-aos="fade-up">
			<h2 class="section-heading-article" aria-label="My projects starts from here">
				&#60;/Projects&#62;
			</h2>
			<p class="sectionHeadingP"></p>
		</div>
		<div class="project-boxes-div">
			{#each projects as project}
				<div data-aos="fade-up" class="project-box-wrapper">
					<div class="project-box {project.isFirstProject ? '' : 'project-box2'}">
						<div class="info-div">
							<h2>{project.title}</h2>
							<h3>{project.subtitle}</h3>
							<p class="ProjectDescription">
								{project.description}
							</p>
							<div class="tech-logos">
								{#each project.techStack as tech}
									<img src={tech.src} alt={tech.alt} class="faviconforProject" />
								{/each}
							</div>
							<div class="project-buttons">
								<a href={project.githubUrl} target="_blank" class="github-redirect" aria-label="Visit {project.title} on GitHub">
									<img src="src/svg/github.svg" alt="github redirect button" />
								</a>
								<a href={project.liveUrl} target="_blank" class="cta" aria-label="Visit {project.title} Live">
									<span>Live view</span>
									<svg viewBox="0 0 13 10" height="10px" width="15px">
										<path d="M1,5 L11,5"></path>
										<polyline points="8 1 12 5 8 9"></polyline>
									</svg>
								</a>
							</div>
						</div>
						<a href={project.liveUrl} target="_blank" class="image-div" aria-label="Visit {project.title} Live">
							<img src={project.imageUrl} alt="{project.title} project preview image" />
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.projects-section-container {
		padding: 150px 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.projects-section-div {
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

	.project-boxes-div {
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 50px;
		padding: 50px;
	}
</style>