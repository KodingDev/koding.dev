<script lang="ts">
  import type { NotionBlock, NotionColor, NotionRichTextData } from '$lib/notion';
  import NotionRichText from './NotionRichText.svelte';

  export let block: NotionBlock;
  export let data: {
    rich_text: NotionRichTextData[];
    color: NotionColor; // TODO: Handle
    is_toggleable: boolean; // TODO: Handle
  };
</script>

{#if block.type === 'heading_1'}
  <h3 class="my-6 text-4xl font-semibold">
    <NotionRichText text={data.rich_text} />
  </h3>
{:else if block.type === 'heading_2'}
  <h4 class="my-4 text-3xl font-semibold">
    <NotionRichText text={data.rich_text} />
  </h4>
{:else if block.type === 'heading_3'}
  <h5 class="my-3 text-2xl font-semibold">
    <NotionRichText text={data.rich_text} />
  </h5>
{/if}
