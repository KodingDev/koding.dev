<script lang="ts">
  import type { NotionEmoji } from '$lib/notion';

  export let data: NotionEmoji;
</script>

<div>
  <span class="text-4xl">{data.emoji}</span>
</div>
