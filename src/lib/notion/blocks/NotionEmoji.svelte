<script lang="ts">
	import type { NotionEmoji } from '../notion.types';

	export let data: NotionEmoji;
</script>

<div>
	<span class="text-4xl">{data.emoji}</span>
</div>
