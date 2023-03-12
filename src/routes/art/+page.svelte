<script lang="ts">
  import Image from '$components/base/Image.svelte';
  import CallToAction from '$components/interactive/CallToAction.svelte';
  import Header from '$components/layout/Header.svelte';
  import Seo from '$components/seo/Seo.svelte';
  import { REF_SHEET } from '$lib/data/commissions';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Seo title="Art" />

<div class="layout-container flex flex-col gap-4 pb-36">
  <Header emoji="🎨" title="Art" class="pt-40 pb-32">I've commissioned a lot of art over the years, please support these talented artists!</Header>

  <!-- Ref sheet card -->
  <!-- TODO: Make this page look better -->
  <CallToAction picture={REF_SHEET.commission.images[0]} href="/art/{REF_SHEET.artist.name}/{REF_SHEET.commission.slug}">
    <div class="flex min-h-[400px] flex-col justify-end gap-3 p-6 md:p-10">
      <!-- Artist name -->
      <div class="flex flex-row items-center gap-2">
        <!-- Profile pic -->
        {#if REF_SHEET.artist.avatar}
          <Image picture={REF_SHEET.artist.avatar} class="h-6 w-6 rounded-md" alt={REF_SHEET.artist.name} />
        {/if}
        <span class="opacity-75">By {REF_SHEET.artist.name}</span>
      </div>

      <!-- Commission Name -->
      <div class="flex flex-row items-center gap-4">
        <!-- Commissions name -->
        <h1 class="text-2xl font-bold">Reference Sheet</h1>

        <!-- Arrow Icon -->
        <span class="icon-[material-symbols--arrow-outward] h-6 w-6" />
      </div>

      <!-- Description -->
      <span class="opacity-50">{REF_SHEET.commission.description}</span>
    </div>
  </CallToAction>

  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    {#each Object.entries(data.artists) as [slug, artist]}
      {#each artist.commissions as commission}
        <a
          class="relative aspect-square w-full overflow-clip rounded-md border border-white/25 transition-all hover:scale-[101%] hover:shadow-xl"
          href="/art/{slug}/{commission.slug}"
        >
          <!-- Image -->
          <Image class="-z-2 absolute inset-0 h-full w-full object-cover object-top" picture={commission.images[0]} alt={commission.title} />

          <!-- Gradient overlay -->
          <div class="-z-1 absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

          <!-- Descriptions -->
          <div class="relative flex h-full flex-col justify-end gap-1 p-6">
            <div class="flex flex-row items-center gap-4">
              <!-- Commissions name -->
              <h1 class="text-2xl font-bold">{commission.title}</h1>

              <!-- Arrow Icon -->
              <span class="icon-[material-symbols--arrow-outward] h-6 w-6" />
            </div>

            <!-- Artist name -->
            <div class="flex flex-row items-center gap-2">
              <!-- Profile pic -->
              {#if artist.avatar}
                <Image picture={artist.avatar} class="h-6 w-6 rounded-md" alt={artist.name} />
              {/if}
              <span class="opacity-75">By {artist.name}</span>
            </div>
          </div>
        </a>
      {/each}
    {/each}
  </div>
</div>
