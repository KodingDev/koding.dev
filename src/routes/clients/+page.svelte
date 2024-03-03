<script lang="ts">
  import ClientCallToAction from '$components/clients/ClientCallToAction.svelte';
  import Header from '$components/base/Header.svelte';
  import Seo from '$components/seo/Seo.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Seo
  title="Clients"
  description="I've had the pleasure of working with some amazing people, here are some of them, and the cool things we've built together."
/>

<div class="layout-container pb-36 pt-40">
  <Header emoji="📊" title="Clients">Some of the amazing people I've had the pleasure of working with.</Header>
  <div class="grid grid-cols-1 gap-8 pt-32 lg:grid-cols-2">
    {#each Object.entries(data.clients) as [slug, client]}
      <ClientCallToAction {client} href="/clients/{slug}" />
    {/each}
  </div>
</div>
