<!--
  This code is based on the work of the work of Rodney Johnson from the
  sveltekit-seo project. The original code can be found here:

  https://github.com/rodneylab/sveltekit-seo/blob/main/src/lib/components/SEO/OpenGraph.svelte

  Modifications have been made to the code to make it work best with my use case.
  The original code is licensed under "BSD 3-Clause "New" or "Revised" License",
  which can be found here:

  https://github.com/rodneylab/sveltekit-seo/blob/main/LICENSE
-->
<script lang="ts">
  export let siteTitle: string;
  export let pageTitle: string;
  export let description: string;
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
  <meta property="og:description" content={description} />

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
