<script lang="ts">
  import { NOTION_COLOR_MAP } from '$lib/notion';
  import type { NotionColor, NotionRichTextData } from '$lib/notion';

  export let text: NotionRichTextData[];
  export let color: NotionColor = 'default';
</script>

{#each text as text}
  {#if text.type === 'text'}
    <span
      class:font-semibold={text.annotations.bold}
      class:italic={text.annotations.italic}
      class:underline={text.annotations.underline}
      class:line-through={text.annotations.strikethrough}
      class:notion-code-inline={text.annotations.code}
      class={NOTION_COLOR_MAP[
        text.annotations.color === 'default' ? color : text.annotations.color
      ]}
    >
      {#if text.text.link}
        <a href={text.text.link.url}>
          {text.text.content}
        </a>
      {:else}
        <!-- The closing IF needs to be on the same line as the span to fix some formatting issues -->
        {text.text.content}{/if}</span
    >
  {/if}
{/each}
