<!--
  This code is based on the work of the work of Rodney Johnson from the
  sveltekit-seo project. The original code can be found here:

  https://github.com/rodneylab/sveltekit-seo/blob/main/src/lib/components/SEO/index.svelte

  Modifications have been made to the code to make it work best with my use case.
  The original code is licensed under "BSD 3-Clause "New" or "Revised" License",
  which can be found here:

  https://github.com/rodneylab/sveltekit-seo/blob/main/LICENSE
-->
<script lang="ts">
  import OpenGraph from './OpenGraph.svelte';
  import Twitter from './Twitter.svelte';

  import CompactBannerPurple from '$assets/branding/compact-banner-purple.png';

  import website from '$lib/config/website';

  export let title: string;
  export let slug: string;
  export let description = '';

  export let ogImage: { url: string; alt: string } | undefined = undefined;
  export let ogSquareImage: { url: string; alt: string } | undefined = undefined;
  export let twitterImage: { url: string; alt: string } | undefined = {
    url: CompactBannerPurple,
    alt: 'Compact Banner Purple',
  };

  const url = `${website.siteUrl}/${slug || ''}`;
  const pageTitle = `${title || 'Commission'} | ${website.siteTitle}`;

  const openGraphProps = {
    url,
    pageTitle,

    image: ogImage,
    squareImage: ogSquareImage,

    ogLanguage: website.siteLanguage,
    siteTitle: website.siteTitle,
  };

  const twitterProps = {
    image: twitterImage,
    twitterUsername: website.twitterUsername,
  };
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={description} />
  <meta name="theme-color" content={website.themeColor} />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
</svelte:head>

<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />
