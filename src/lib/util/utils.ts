import { onDestroy } from 'svelte';

export const onInterval = (callback: () => void, milliseconds: number) => {
	const interval = setInterval(callback, milliseconds);
	onDestroy(() => clearInterval(interval));
};
