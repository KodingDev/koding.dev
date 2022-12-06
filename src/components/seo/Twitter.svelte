<script lang="ts">
	// Stolen from: https://github.com/rodneylab/sveltekit-seo/blob/main/src/lib/components/SEO/Twitter.svelte

	export let twitterUsername: string | undefined = undefined;
	export let image: { url: string; alt: string } | undefined = undefined;

	/*
	 * When there is an equivalent og tag present, Twitter takes that so check OpenGraph before
	 * adding additional tags, unless you want to override OpenGraph.
	 */
</script>

<svelte:head>
	<meta name="twitter:card" content="summary_large_image" />

	{#if image}
		<meta name="twitter:image" content={image.url} />
	{/if}

	{#if twitterUsername}
		<meta name="twitter:creator" content={`@${twitterUsername}`} />
		<meta name="twitter:site" content={`@${twitterUsername}`} />
	{/if}
</svelte:head>
