<script lang="ts">
  import Seo from '$components/seo/Seo.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<!-- TODO: Fix slug -->
<Seo
  title={data.commission.title}
  slug={`/art/${data.artist.name}`}
  description={data.commission.description || ''}
  twitterImage={{ url: data.commission.images[0], alt: 'Illustration' }}
/>

<div class="layout-container pt-40 pb-36">
  <div class="flex flex-col gap-6">
    <!-- TODO: Hover effect -->
    <a href="/art" class="flex flex-row items-center gap-2 opacity-50"> <span class="icon-[material-symbols--arrow-back] h-5 w-5" />Back to all commissions</a>

    <!-- TODO: Hover effect -->
    <a class="flex flex-row items-center gap-2" href={data.artist.link} target="_blank" rel="noopener noreferrer">
      <!-- Artist icon -->
      {#if data.artist.avatar}
        <img src={data.artist.avatar} class="h-5 w-5 rounded-md" alt={data.artist.name} />
      {/if}

      <span class="opacity-50">By {data.artist.name}</span>

      {#if data.artist.link}
        <span class="icon-[material-symbols--arrow-outward] h-5 w-5 opacity-50" />
      {/if}
    </a>

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
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-row items-center gap-2 rounded-full border-2 border-white/10 py-3 px-5"
          >
            <!-- TODO: Icon links -->
            <span class="icon-[logos--twitter] h-4 w-4 fill-white" />
            <span>{link.text}</span>
            <span class="icon-[material-symbols--arrow-outward] h-4 w-4" />
          </a>
        {/each}
      </div>
    {/if}

    <!-- Images -->
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {#each data.commission.images as image}
        <img src={image} class="rounded-md object-cover object-center" alt={data.commission.title} />
      {/each}
    </div>
  </div>
</div>

<!-- <div class="flex flex-col gap-6">
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
</div> -->
