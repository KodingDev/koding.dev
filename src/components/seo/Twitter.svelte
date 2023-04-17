<!--
  This code is based on the work of the work of Rodney Johnson from the
  sveltekit-seo project. The original code can be found here:

  https://github.com/rodneylab/sveltekit-seo/blob/main/src/lib/components/SEO/Twitter.svelte

  Modifications have been made to the code to make it work best with my use case.
  The original code is licensed under "BSD 3-Clause "New" or "Revised" License",
  which can be found here:

  https://github.com/rodneylab/sveltekit-seo/blob/main/LICENSE
-->
<script lang="ts">
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
