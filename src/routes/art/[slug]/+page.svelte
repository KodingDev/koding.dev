<script lang="ts">
  import CommissionImage from '$components/art/CommissionImage.svelte';
  import CommissionPage from '$components/art/CommissionPage.svelte';
  import SEO from '$components/seo/SEO.svelte';
  import { getText, getURL } from '$lib/data/commissions';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<SEO
  title={data.title}
  slug={`/art/${data.slug}`}
  description={data.description || ''}
  twitterImage={{ url: getURL(data.images[0]), alt: 'Illustration' }}
/>

<div class="flex flex-col gap-6">
  <a class="link w-fit" href="/art">&larr; Back to Gallery</a>

  <div class="basic-card">
    <CommissionPage commission={data} />
  </div>

  <div class="basic-card">
    <h1 class="text-3xl font-bold">Images</h1>
    <p class="pb-4 text-neutral-400">Click on an image to view it in full size.</p>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {#each data.images as image}
        <CommissionImage
          src={getURL(image)}
          title={data.title}
          subtitle={getText(image)}
          className={typeof image === 'string'
            ? 'col-span-2 md:col-span-1'
            : image.mode === 'expanded'
            ? 'col-span-2 lg:col-span-2 xl:col-span-3'
            : image.mode === 'full'
            ? 'col-span-full'
            : ''}
        />
      {/each}
    </div>
  </div>
</div>
