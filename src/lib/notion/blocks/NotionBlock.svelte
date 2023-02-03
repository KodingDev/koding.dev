<script lang="ts">
	import type { NotionBlock } from '../index';
	import { NOTION_BLOCK_RENDERERS } from '$lib/notion';

	// Pass in the
	export let block: NotionBlock;

	const renderer = NOTION_BLOCK_RENDERERS[block?.type];
</script>

{#if renderer}
	<svelte:component this={renderer()} {...$$restProps} {block} data={block[block.type]} />
{:else}
	<p class="text-red-400">Unknown block type: {block.type}</p>
	<pre>{JSON.stringify(block, null, 2)}</pre>
{/if}
