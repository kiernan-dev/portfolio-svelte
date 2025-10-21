<script lang="ts">
	import { onMount } from 'svelte';
	import { cursorStore } from '$lib/stores';
	import { browser } from '$app/environment';

	let cursorInner: HTMLDivElement;
	let cursorOuter: HTMLDivElement;
	let isHovering = false;

	onMount(() => {
		if (!browser) return;

		// Subscribe to cursor position
		cursorStore.subscribe(cursor => {
			if (cursorInner && cursorOuter) {
				cursorInner.style.left = `${cursor.x}px`;
				cursorInner.style.top = `${cursor.y}px`;
				
				cursorOuter.animate(
					{
						left: `${cursor.x}px`,
						top: `${cursor.y}px`,
					},
					{ duration: 500, fill: "forwards" }
				);
			}
		});

		// Handle hover effects
		const links = document.querySelectorAll("a, label, button, .cursor-hover");
		
		function addHoverClass() {
			isHovering = true;
		}
		
		function removeHoverClass() {
			isHovering = false;
		}

		links.forEach((link) => {
			link.addEventListener("mouseenter", addHoverClass);
			link.addEventListener("mouseleave", removeHoverClass);
		});

		return () => {
			links.forEach((link) => {
				link.removeEventListener("mouseenter", addHoverClass);
				link.removeEventListener("mouseleave", removeHoverClass);
			});
		};
	});
</script>

<div class="cursor-inner {isHovering ? 'hover' : ''}" bind:this={cursorInner}></div>
<div class="cursor-outer {isHovering ? 'hover' : ''}" bind:this={cursorOuter}></div>

<style>
	.cursor-inner {
		width: 8px;
		height: 8px;
		background-color: var(--color-light-blue);
		position: fixed;
		top: 0;
		left: 0;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		z-index: 9999;
		pointer-events: none;
	}

	.cursor-outer {
		width: 35px;
		height: 35px;
		border: 2px solid #fff;
		position: fixed;
		top: 0;
		left: 0;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		z-index: 9999;
		pointer-events: none;
	}

	.cursor-inner.hover {
		width: 25px;
		height: 25px;
		transition: 0.2s;
		mix-blend-mode: difference;
	}

	.cursor-outer.hover {
		width: 50px;
		height: 50px;
		transition: 0.2s;
	}

	/* Hide on mobile */
	@media screen and (max-width: 685px) {
		.cursor-inner,
		.cursor-outer {
			display: none !important;
		}
	}
</style>