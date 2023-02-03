<script lang="ts">
	import type { RichTextDataText } from '$lib/notion';

	export let data: {
		caption: RichTextDataText[]; // TODO: Implement
		rich_text: RichTextDataText[];
		language?: string;
	};

	// Map code
	const code = data?.rich_text?.map((text) => text.plain_text ?? '')?.join('') ?? '';
</script>

<div class="py-2">
	<div class="overflow-clip rounded-lg">
		<pre>{code}</pre>
	</div>
</div>
