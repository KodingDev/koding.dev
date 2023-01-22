<script lang="ts">
	// Stolen from: https://github.com/rodneylab/sveltekit-seo/blob/main/src/lib/components/SEO/OpenGraph.svelte

	export let siteTitle: string;
	export let pageTitle: string;
	export let url: string;

	export let image: { url: string; alt: string } | undefined = undefined;
	export let squareImage: { url: string; alt: string } | undefined = undefined;

	export let ogLanguage = 'en';
</script>

<svelte:head>
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:locale" content={ogLanguage} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:url" content={url} />

	<meta property="og:type" content="website" />

	{#if image}
		<meta property="og:image" content={image.url} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="627" />
		<meta property="og:image:alt" content={image.alt} />
	{/if}

	{#if squareImage}
		<meta property="og:image" content={squareImage.url} />
		<meta property="og:image:width" content="400" />
		<meta property="og:image:height" content="400" />
		<meta property="og:image:alt" content={squareImage.alt} />
	{/if}
</svelte:head>
