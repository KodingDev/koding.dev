<script lang="ts">
	import clsx from 'clsx';
	import type { NotionRichTextData } from '../notion.types';
	import NotionBlock from './NotionBlock.svelte';
	import NotionRichText from './NotionRichText.svelte';

	export let block: NotionBlock;
	export let data: {
		rich_text: NotionRichTextData[];
	};

	// Indentation
	export let level = 0;
	const levels: {
		ul: string;
		li: string;
	}[] = [
		{
			ul: 'list-disc',
			li: 'ml-0'
		},
		{
			ul: '[list-style-type:circle]',
			li: 'ml-8'
		},
		{
			ul: '[list-style-type:square]',
			li: 'ml-16'
		}
	];
</script>

<ul class={clsx('list-inside', levels[level]?.ul)}>
	<li class={levels[level]?.li || 'ml-0'}>
		<NotionRichText text={data.rich_text} />

		{#if block.children && block.children.length}
			{#each block.children as child}
				<NotionBlock block={child} level={level + 1} />
			{/each}
		{/if}
	</li>
</ul>
