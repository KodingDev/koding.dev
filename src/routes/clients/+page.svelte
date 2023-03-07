<script lang="ts">
  import ClientCallToAction from '$components/clients/ClientCallToAction.svelte';
  import Seo from '$components/seo/Seo.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Seo title="Clients" slug="/clients" />

<div class="layout-container pt-40 pb-36">
  <div class="flex flex-col gap-3">
    <p class="text-2xl font-medium"><span class="pr-4">📊</span> Clients</p>
    <h1 class="text-5xl font-bold leading-[1.8] sm:text-5xl sm:leading-[1.8]">Some of the amazing people I've had the pleasure of working with.</h1>
  </div>

  <div class="grid grid-cols-1 gap-8 pt-32 lg:grid-cols-2">
    {#each Object.entries(data.clients) as [slug, client]}
      <ClientCallToAction {client} href="/clients/{slug}" />
    {/each}
  </div>
</div>
