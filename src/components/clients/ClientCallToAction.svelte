<script lang="ts">
  import Image from '$components/base/Image.svelte';
  import CallToAction from '$components/interactive/CallToAction.svelte';
  import type { Client } from '$lib/data/clients';

  export let client: Client;
  export let href: string = client.href;
</script>

<CallToAction {href} picture={client.banner} picMaxWidth="40vw">
  <div class="flex flex-col gap-3 p-6 md:p-10">
    <div class="flex flex-row items-center">
      <!-- Status Dot -->
      <div class="h-2 w-2 rounded-full {client.end ? 'bg-red-500' : 'bg-green-500'}" />

      <!-- Date -->
      <span class="pl-2 opacity-75">{client.start ?? 'Unknown'} - {client.end ?? 'Now'}</span>
    </div>

    <!-- Avatar & Name -->
    <div class="flex flex-row items-center gap-4">
      {#if client.avatar}
        <!-- Darken the image -->
        <Image alt="{client.name} Avatar" maxWidth="5vw" picture={client.avatar} class="h-11 w-11 rounded-lg" />
      {/if}

      <span class="text-2xl font-bold">{client.name}</span>

      <!-- Outward arrow -->
      <span class="icon-[material-symbols--arrow-outward] h-7 w-7" />
    </div>

    <!-- Description -->
    {#if client.description}
      <span class="opacity-50">{client.description}</span>
    {/if}
  </div>
</CallToAction>
