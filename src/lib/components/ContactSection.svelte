<script lang="ts">
	let formData = {
		name: '',
		email: '',
		message: ''
	};

	let isSubmitting = false;
	let submitMessage = '';

	async function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;
		submitMessage = '';

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			if (response.ok) {
				submitMessage = 'Message sent successfully!';
				formData = { name: '', email: '', message: '' };
			} else {
				submitMessage = 'Failed to send message. Please try again.';
			}
		} catch (error) {
			submitMessage = 'An error occurred. Please try again.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<section class="contact-section-container" id="contact">
	<div class="contact-section">
		<div class="section-heading" data-aos="fade-up">
			<h2 class="section-heading-article" aria-label="contact heading">
				&#60;/Contact&#62;
			</h2>
			<p class="sectionHeadingP"></p>
		</div>
		<div class="contact-content">
			<div class="getintouch-heading" data-aos="fade-up" data-aos-delay="200">
				<article>GetinTouch();</article>
			</div>
			<div class="contact-form-container">
				<form class="contact-form" on:submit={handleSubmit} data-aos="fade-up" data-aos-delay="400">
					<div class="form-group">
						<label for="contact-name">Name</label>
						<input 
							type="text" 
							id="contact-name" 
							name="name" 
							placeholder="Your Name" 
							autocomplete="name" 
							bind:value={formData.name}
							required
						>
					</div>
					<div class="form-group">
						<label for="contact-email">Email</label>
						<input 
							type="email" 
							id="contact-email" 
							name="email" 
							placeholder="Your Email" 
							autocomplete="email" 
							bind:value={formData.email}
							required
						>
					</div>
					<div class="form-group">
						<label for="contact-message">Message</label>
						<textarea 
							id="contact-message" 
							name="message" 
							placeholder="Your Message" 
							rows="5" 
							bind:value={formData.message}
							required
						></textarea>
					</div>
					<button type="submit" class="contact-submit-btn" disabled={isSubmitting}>
						<span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
					</button>
					{#if submitMessage}
						<div class="submit-message" class:success={submitMessage.includes('successfully')}>
							{submitMessage}
						</div>
					{/if}
				</form>
			</div>
			<div class="contact-tagline" data-aos="fade-up" data-aos-delay="600">
				<article aria-label="AI as Force Multiplier, my quote">
					"Seasoned craftsmanship enhanced by artificial intelligence."
				</article>
			</div>
		</div>
	</div>
</section>

<style>
	.contact-section-container {
		padding: 150px 0 50px 0;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.contact-section {
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