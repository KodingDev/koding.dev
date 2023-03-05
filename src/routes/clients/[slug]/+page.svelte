<script lang="ts">
  import Seo from '$components/seo/Seo.svelte';
  import type { PageData } from './$types';
  import Image from '$components/base/Image.svelte';
  import Link from '$components/interactive/Link.svelte';
  import GradientBackground from '$components/base/GradientBackground.svelte';
  import MediaEmbed from '$components/base/MediaEmbed.svelte';

  export let data: PageData;
</script>

<Seo title={data.client.name} slug={data.slug} description={data.client.description} />

<div class="layout-container flex flex-col gap-8 pt-32 pb-36">
  <!-- TODO: Hover effect -->
  <a href="/clients" class="flex flex-row items-center gap-2 opacity-50"> <span class="icon-[material-symbols--arrow-back] h-6 w-6" />Back to all clients</a>

  <div class="relative h-[420px] overflow-clip rounded-xl border border-white/25">
    <!-- Banner -->
    {#if data.client.banner}
      <Image picture={data.client.banner} class="w-full object-cover" alt="Cover" />
      <div class="z-1 absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black/50" />
    {:else}
      <!-- Cool ass gradient instead -->
      <GradientBackground class="w-full opacity-50" />
    {/if}

    <!-- Headings -->
    <div class="absolute left-10 bottom-10 flex flex-col gap-3">
      <div class="flex flex-row items-center">
        <!-- Status Dot -->
        <div class="h-2 w-2 rounded-full {data.client.end ? 'bg-red-500' : 'bg-green-500'}" />

        <!-- Date -->
        <span class="pl-2 opacity-75">{data.client.start ?? 'Unknown'} - {data.client.end ?? 'Now'}</span>
      </div>

      <Link picture={data.client.avatar} href={data.client.url}>{data.client.name}</Link>

      <!-- Description -->
      {#if data.client.description}
        <span class="opacity-50">{data.client.description}</span>
      {/if}
    </div>
  </div>

  <!-- TODO: Handle when there are no projects -->
  <span class="text-3xl font-bold">Projects</span>
  {#each data.client.projects as project}
    <div class="flex flex-col gap-6 border-b border-white/25 py-8">
      <!-- Name & description -->
      <h2 class="text-2xl font-bold">{project.name}</h2>
      <span class="opacity-50">{project.description}</span>

      <!-- Media carousel -->
      <div class="w-full columns-2 gap-6">
        {#each project.media as media}
          <div class="mb-6">
            {#if typeof media.media === 'string'}
              <!-- Website embeds -->
              <MediaEmbed src={media.media} class="aspect-video w-full rounded-xl" />
            {:else if typeof media.media === 'object'}
              <Image picture={media.media} class="w-full rounded-xl object-cover" caption={media.caption} />
            {/if}
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
