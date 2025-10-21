<script lang="ts">
	// About section component
</script>

<section class="about-section-container" id="about">
	<div class="about-section">
		<div class="section-heading">
			<h2 class="section-heading-article" aria-label="About me heading">
				&#60;/AboutMe&#62;
			</h2>
			<p class="sectionHeadingP"></p>
		</div>
		<div class="info-dp-section">
			<div class="about-info">
				<p>My career has spanned diverse challenges: crafting web solutions for local businesses, designing 
					high-impact digital experiences for Fortune 500 brands, modernizing legacy legal systems with strict 
					chain-of-custody compliance for trial preparation, and building HIPAA-compliant applications for 
					pharmaceutical clients. Each role has deepened my ability to create secure, scalable software 
					that balances technical rigor with real-world needs.</p>
				<p>I've come to value the lessons learned from every setback, whether it was an application that failed 
					to scale, an accessibility audit revealing critical gaps, or a deployment error affecting mission-critical 
					systems. I've learned to focus on the fundamentals first—performance, maintainability, and inclusive 
					design—then layer in advanced tech like AI agents, automation, and Web3 where they actually add value.</p> 
				<div class="expertise-tags">
					<span class="tag primary" data-aos="fade-up" data-aos-delay="400">Frontend Architecture</span>
					<span class="tag secondary" data-aos="fade-up" data-aos-delay="500">Full-Stack Development</span>
					<span class="tag primary" data-aos="fade-up" data-aos-delay="600">UI/UX Design</span>
					<span class="tag accent" data-aos="fade-up" data-aos-delay="700">Creative Problem Solving</span>
					<span class="tag primary" data-aos="fade-up" data-aos-delay="800">AI Integration</span>
					<span class="tag secondary" data-aos="fade-up" data-aos-delay="900">CI/CD Pipeline</span>
					<span class="tag primary" data-aos="fade-up" data-aos-delay="1000">Graphic Design</span>
					<span class="tag accent" data-aos="fade-up" data-aos-delay="1100">Team Leadership</span>
					<span class="tag secondary" data-aos="fade-up" data-aos-delay="1200">Responsive Design</span>
					<span class="tag accent" data-aos="fade-up" data-aos-delay="1300">Brand Identity</span>
					<span class="tag primary" data-aos="fade-up" data-aos-delay="1400">Prototyping</span>
					<span class="tag secondary" data-aos="fade-up" data-aos-delay="1500">Automation</span>
					<span class="tag accent" data-aos="fade-up" data-aos-delay="1600">Microservices</span>
					<span class="tag primary" data-aos="fade-up" data-aos-delay="1700">DevOps</span>
					<span class="tag secondary" data-aos="fade-up" data-aos-delay="1800">Web3</span>
					<span class="tag primary" data-aos="fade-up" data-aos-delay="2000">Blockchain</span>
				</div>
			</div>
			<div class="professional-highlights" data-aos="fade-up">
				<div class="philosophy-quote" data-aos="fade-up" data-aos-delay="500">
					<blockquote>
						<span class="quote-mark">"</span>
						<span class="quote-text">AI doesn't replace my experience—it accelerates it. Two decades of production debugging, creative problem-solving, and full-stack development, combined with prompt engineering expertise, help me guide AI tools to deliver better results faster than traditional approaches.</span>
						<span class="quote-mark">"</span>
					</blockquote>
					<div class="quote-author">— Professional Philosophy</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about-section-container {
		width: 100%;
		height: fit-content;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding-top: 200px;
	}

	.about-section {
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

	.info-dp-section {
		width: 100%;
		display: flex;
		margin-top: 30px;
	}

	.about-info {
		width: 70%;
		display: flex;
		flex-direction: column;
		padding-right: 4rem;
	}

	.about-info p {
		padding-bottom: 1.2rem;
		line-height: 25px;
		font-weight: 400;
		font-size: 2.2rem;
		color: var(--color-white);
	}

	.professional-highlights {
		width: 30%;
		display: flex;
		flex-direction: column;
		gap: 0;
		padding: 0;
		margin: 0;
		max-width: none;
		align-items: flex-start;
		justify-content: flex-start;
	}

	.expertise-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
		margin: 4rem 0 1rem 0;
	}

	.tag {
		padding: 0.5rem 1rem;
		border-radius: 25px;
		font-size: 1.2rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		transition: all 0.3s ease;
		cursor: default;
		position: relative;
		overflow: hidden;
	}

	.tag::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
		transition: left 0.6s;
	}

	.tag:hover::before {
		left: 100%;
	}

	.tag.primary {
		background: linear-gradient(135deg, #3b82f6, #1d4ed8);
		color: white;
		border: 1px solid #2563eb;
	}

	.tag.secondary {
		background: linear-gradient(135deg, #8b5cf6, #7c3aed);
		color: white;
		border: 1px solid #7c3aed;
	}

	.tag.accent {
		background: linear-gradient(135deg, #f59e0b, #d97706);
		color: white;
		border: 1px solid #f59e0b;
	}

	.tag:hover {
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
	}

	.philosophy-quote {
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 16px;
		padding: 2rem 1.5rem;
		margin: 0;
		position: relative;
		backdrop-filter: blur(20px);
		overflow: hidden;
		text-align: center;
		width: 100%;
		box-sizing: border-box;
	}

	.philosophy-quote::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(91, 33, 182, 0.05) 50%, rgba(245, 158, 11, 0.05) 100%);
		border-radius: 16px;
		z-index: -1;
	}

	.philosophy-quote::after {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
		transition: left 0.8s;
		z-index: 1;
	}

	.philosophy-quote:hover::after {
		left: 100%;
	}

	.quote-mark {
		font-size: 4rem;
		background: linear-gradient(135deg, #00d4ff, #5b21b6, #f59e0b);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-family: 'Orbitron', monospace;
		line-height: 1;
		opacity: 0.6;
		display: block;
		margin-bottom: 0;
		position: relative;
		z-index: 2;
	}

	.quote-text {
		font-size: 2rem;
		line-height: 1.8;
		color: #f1f5f9;
		font-style: italic;
		font-weight: 400;
		display: block;
		margin: 0 0 1.5rem 0;
		position: relative;
		z-index: 2;
		letter-spacing: 0.3px;
	}

	.quote-author {
		text-align: center;
		font-size: 1.1rem;
		color: #f1f5f9;
		font-weight: 600;
		margin-top: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		position: relative;
		z-index: 2;
	}

	.quote-author::before {
		content: '';
		width: 60px;
		height: 2px;
		background: linear-gradient(90deg, #00d4ff, #5b21b6);
		display: block;
		margin: 1rem auto;
	}

	/* Mobile styles */
	@media screen and (max-width: 875px) {
		.info-dp-section {
			flex-direction: column;
			gap: 2rem;
		}
		
		.about-info {
			width: 100%;
			padding-right: 0;
		}
		
		.professional-highlights {
			width: 100%;
		}
	}
</style>