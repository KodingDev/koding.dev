<script lang="ts">
  import NotionRichText from '$lib/notion/blocks/NotionRichText.svelte';
  import type { NotionColor, NotionEmoji, NotionRichTextData } from '$lib/notion/notion.types';

  export let data: {
    rich_text: NotionRichTextData[];
    icon: NotionEmoji; // TODO: File support
    color: NotionColor; // TODO: Handle
  };
</script>

<div class="my-4 rounded-md bg-neutral-700 p-4">
  {#if data.icon && data.icon.emoji}
    <span class="mr-2">{data.icon.emoji}</span>
  {/if}

  <NotionRichText text={data.rich_text} />
</div>
