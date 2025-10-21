<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { themeStore, audioStore } from '$lib/stores';

	onMount(() => {
		// Load saved theme
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'light') {
			themeStore.set('light');
		}
	});
</script>

<div class="app">
	<slot />
</div>

<style>
	.app {
		width: 100%;
		min-height: 100vh;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
		background-color: var(--color-dark-mode);
		overflow-x: hidden;
		transition: background-color 0.3s ease;
	}

	:global(body.light-mode) {
		background-color: var(--color-light-mode);
	}

	:global(.cursor-inner) {
		position: fixed;
		top: 0;
		left: 0;
		width: 8px;
		height: 8px;
		background-color: #fff;
		border-radius: 50%;
		pointer-events: none;
		z-index: 9999;
		mix-blend-mode: difference;
		transition: transform 0.1s ease;
	}

	:global(.cursor-outer) {
		position: fixed;
		top: 0;
		left: 0;
		width: 40px;
		height: 40px;
		border: 2px solid rgba(255, 255, 255, 0.5);
		border-radius: 50%;
		pointer-events: none;
		z-index: 9998;
		mix-blend-mode: difference;
	}

	:global(.cursor-inner.hover),
	:global(.cursor-outer.hover) {
		transform: scale(1.5);
	}
</style>