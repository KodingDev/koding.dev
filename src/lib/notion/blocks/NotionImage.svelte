<script lang="ts">
	import type { NotionFile, NotionRichTextData } from '../index';
	import NotionRichText from './NotionRichText.svelte';

	export let data: NotionFile & {
		caption?: NotionRichTextData[];
	};
</script>

<div>
	<img class="max-w-xl" src={data.file.url} alt="Notion" />

	{#if data.caption && data.caption.length}
		<NotionRichText text={data.caption} color="gray" />
	{/if}
</div>
