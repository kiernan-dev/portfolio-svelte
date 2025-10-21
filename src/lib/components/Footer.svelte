<script lang="ts">
	// Footer placeholder
</script>

<footer id="footer">
	<div class="footer-background">
		<div class="footer-blob"></div>
	</div>
	<div class="footer-foreground">
		<div class="footercontainer">
			<div class="social-media-container">
				<div class="logos">
					<a href="https://github.com/kiernan-dev" target="_blank" tabindex="0" aria-label="My GitHub">
						<svg viewBox="0 0 496 512" class="SocialHandle">
							<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
						</svg>
					</a>
					<a href="mailto:kiernan.devsignr@gmail.com" target="_blank" tabindex="0" aria-label="My email">
						<svg id="GmailLogo" viewBox="0 0 512 512">
							<path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
						</svg>
					</a>
				</div>
			</div>
			<div class="footer-avatar-container">
				<img src="/src/png/k-avatar-2.png" alt="animation-head" class="footer-avatar-img" id="footer-wala-avatar"/>
			</div>
			<div class="footer-bottom">
				<article>
					Made in the USA &nbsp;|&nbsp; &#169; 2024
				</article>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		width: 100%;
		height: fit-content;
		position: relative;
		overflow: hidden;
	}

	.footer-background {
		width: 100%;
		min-height: 400px;
		background: transparent;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		z-index: 1;
	}

	.footer-blob {
		width: 100%;
		height: 200px;
		background-color: var(--color-light-purple);
		border-radius: 50%;
		filter: blur(100px);
		opacity: 0.7;
	}

	.footer-foreground {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		backdrop-filter: blur(10px);
	}

	.footercontainer {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
	}

	.social-media-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.logos {
		height: 120px;
		width: 100%;
		display: flex;
		gap: 30px;
		justify-content: center;
		align-items: center;
	}

	.social-media-container a {
		width: 60px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		padding: 10px;
		border-radius: 50%;
		border: 2px solid #e2dede;
		position: relative;
		box-shadow: 0 0 0 #8000ff inset;
		transition-duration: 0.3s;
	}

	.SocialHandle {
		fill: white;
		width: 60%;
	}

	#GmailLogo {
		height: 70%;
		fill: white;
	}

	.social-media-container a:hover {
		box-shadow: 0 0 50px 100px #8000ff inset;
		transition-duration: 1s;
		border: none;
	}

	.footer-avatar-container {
		width: 220px;
		margin-top: 20px;
		position: relative;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}

	.footer-avatar-img {
		width: 100%;
		z-index: 2;
	}

	.footer-avatar-img:hover {
		filter: drop-shadow(0 0 10px #12d4ed) drop-shadow(0 0 20px #12d4ed);
		transition: filter 0.3s ease;
		cursor: pointer;
	}

	.footer-bottom {
		background-color: #0b0b0b;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80px;
		z-index: 3;
	}

	.footer-bottom article {
		font-size: 1.5rem;
		color: #b0b0b0;
		font-family: 'Fira Code', monospace;
	}

	@media screen and (max-width: 580px) {
		.footer-avatar-container {
			width: 160px;
		}
	}
</style>