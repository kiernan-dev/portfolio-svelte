import { writable } from 'svelte/store';

export const themeStore = writable<'dark' | 'light'>('dark');
export const audioStore = writable({
	isPlaying: false,
	currentTrack: '/src/mp3/infinite-canvas.mp3',
	volume: 1
});

export const navigationStore = writable({
	isMobileMenuOpen: false,
	activeSection: 'home'
});

export const cursorStore = writable({
	x: 0,
	y: 0,
	isVisible: true
});