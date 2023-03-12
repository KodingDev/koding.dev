<script lang="ts">
  import ClientCallToAction from '$components/clients/ClientCallToAction.svelte';
  import Header from '$components/layout/Header.svelte';
  import Seo from '$components/seo/Seo.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Seo title="Clients" />

<div class="layout-container pt-40 pb-36">
  <Header emoji="📊" title="Clients">Some of the amazing people I've had the pleasure of working with.</Header>
  <div class="grid grid-cols-1 gap-8 pt-32 lg:grid-cols-2">
    {#each Object.entries(data.clients) as [slug, client]}
      <ClientCallToAction {client} href="/clients/{slug}" />
    {/each}
  </div>
</div>
