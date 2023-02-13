<script lang="ts">
  import Client from '$components/home/Client.svelte';
  import Repository from '$components/home/Repository.svelte';
  import SEO from '$components/seo/SEO.svelte';
  import { onInterval } from '$lib/util/utils';
  import type { PageData } from './$types';

  export let data: PageData;

  // Calculate & update the years since I've started coding
  const calcYears = () => {
    const start = new Date('2015-01-01');
    const now = new Date();
    const diff = now.getTime() - start.getTime();
    return diff / (1000 * 60 * 60 * 24 * 365);
  };

  let years = calcYears();
  onInterval(() => (years = calcYears()), 1000);
</script>

<SEO title="Home" slug="/" />

<div class="mx-auto flex w-10/12 flex-col gap-10 pb-12">
  <div class="flex flex-col gap-2">
    <h1 class="text-title">👋 Hi, I'm Stella</h1>
    <h2 class="text-subtitle">
      An experienced software engineer with {years.toFixed(10)} years of experience in the gaming industry.
    </h2>
  </div>

  <div class="flex flex-col gap-2">
    <h1 class="text-title">💻 Projects</h1>
    <h2 class="text-subtitle">Some of my personal projects, pulled from my GitHub.</h2>

    <div class="grid grid-cols-1 gap-4 pt-4 lg:grid-cols-2 xl:grid-cols-3">
      {#each data.pinned as repository}
        <Repository {repository} />
      {/each}
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <h1 class="text-title">📫 Clients</h1>
    <h2 class="text-subtitle">I've worked with some great clients over the years. Here are some of them.</h2>

    <div class="grid grid-cols-1 gap-4 pt-4 lg:grid-cols-2 xl:grid-cols-3">
      {#each data.clients as client}
        <Client {client} />
      {/each}
    </div>
  </div>
</div>
