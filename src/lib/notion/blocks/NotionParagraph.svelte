<script lang="ts">
	import type { NotionColor, NotionRichTextData } from '$lib/notion';
	import NotionRichText from './NotionRichText.svelte';

	export let data: {
		rich_text: NotionRichTextData[];
		color: NotionColor;
	};
</script>

<p class="my-2">
	{#if data.rich_text && data.rich_text.length}
		<NotionRichText text={data.rich_text} color={data.color} />
	{:else}
		<br />
	{/if}
</p>
