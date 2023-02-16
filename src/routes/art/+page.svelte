<script lang="ts">
  import Seo from '$components/seo/Seo.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Seo title="Art" slug="/art" />

<div class="layout-container pt-40 pb-36">
  <div class="flex flex-col gap-3">
    <p class="text-2xl font-medium"><span class="pr-4">🎨</span> Art</p>
    <h1 class="text-5xl font-bold leading-[1.8] sm:text-5xl sm:leading-[1.8]">
      I've commissioned a lot of art over the years, please support these talented artists!
    </h1>
  </div>

  <!-- Ref sheet card -->
  <!-- TODO: Implement -->

  <div class="grid grid-cols-1 gap-4 pt-40 md:grid-cols-2 lg:grid-cols-3">
    {#each Object.entries(data.artists) as [slug, artist]}
      {#each artist.commissions as commission}
        <a
          class="relative aspect-square w-full overflow-clip rounded-md border border-white/25 transition-all hover:scale-[101%] hover:shadow-xl"
          href="/art/{slug}/{commission.slug}"
        >
          <!-- Image -->
          <img class="-z-2 absolute inset-0 h-full w-full object-cover object-top" src={commission.images[0]} alt={commission.title} />

          <!-- Gradient overlay -->
          <div class="-z-1 absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

          <!-- Descriptions -->
          <div class="flex h-full flex-col justify-end p-4">
            <div class="flex flex-row items-center">
              <!-- Commissions name -->
              <h1 class="z-0 text-2xl font-bold">{commission.title}</h1>

              <!-- Arrow Icon -->
              <span class="icon-[material-symbols--arrow-outward] ml-4 h-6 w-6" />
            </div>
            <span class="z-0 opacity-75">By {artist.name}</span>
          </div>
        </a>
      {/each}
    {/each}
  </div>
</div>
