<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col gap-10 w-10/12 mx-auto pb-12">
	<div class="flex flex-col gap-2">
		<h1 class="text-title">🎨 Art</h1>
		<h2 class="text-subtitle">
			While I'm not an artist, I do have an OC/persona for myself! Check out some of the art I've
			commissioned!
		</h2>
	</div>

	{#key data.pathname}
		<div in:fade={{ duration: 250, delay: 250 }} out:fade={{ duration: 250 }}>
			<slot />
		</div>
	{/key}
</div>
