<script lang="ts">
  import Image from '$components/base/Image.svelte';
  import IconLink from '$components/interactive/IconLink.svelte';
  import Link from '$components/interactive/Link.svelte';
  import Seo from '$components/seo/Seo.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Seo
  title={data.commission.title}
  description={data.commission.description || ''}
  twitterImage={{ url: data.commission.images[0].fallback.src, alt: 'Illustration' }}
/>

<div class="layout-container pt-40 pb-36">
  <div class="flex flex-col gap-6">
    <Link style="back" href="/art" class="opacity-50">Back to all commissions</Link>
    <Link href={data.artist.link} picture={data.artist.avatar} class="text-white/50" picClass="h-6 w-6 rounded-md">
      By {data.artist.name}
    </Link>

    <!-- Title -->
    <h1 class="text-5xl font-bold">{data.commission.title}</h1>

    <!-- Description -->
    {#if data.commission.description}
      <p class="opacity-50">{data.commission.description}</p>
    {/if}

    <!-- Links -->
    {#if data.commission.links}
      <div class="flex flex-row gap-4">
        {#each data.commission.links as link}
          <IconLink href={link.href} icon="icon-[mdi--twitter]">{link.text}</IconLink>
        {/each}
      </div>
    {/if}

    <!-- Images -->
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      {#each data.commission.images as image}
        <Image maxWidth="33vw" picture={image} class="rounded-md object-cover object-center" alt={data.commission.title} />
      {/each}
    </div>
  </div>
</div>
