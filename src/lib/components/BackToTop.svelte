<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click');
	}
</script>

<button 
	class="fas" 
	id="backtotopbutton" 
	on:click={handleClick}
	on:keydown={handleClick}
>
	<article aria-label="Back to top">&#8592;BACK TO TOP</article>
</button>

<style>
	#backtotopbutton {
		position: fixed;
		right: 10px;
		bottom: 0;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: none;
		width: 3rem;
		height: 15rem;
		z-index: 101;
		text-align: center;
		transition: 0.4s;
		display: flex;
		background-color: transparent;
		cursor: pointer;
	}

	#backtotopbutton article {
		font-size: 1.5rem;
		color: var(--color-white);
		font-weight: 400;
		writing-mode: vertical-rl;
		mix-blend-mode: difference;
		font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
	}

	#backtotopbutton:hover {
		transform: translate(0, -20px);
		text-decoration: line-through var(--color-white);
	}
</style>