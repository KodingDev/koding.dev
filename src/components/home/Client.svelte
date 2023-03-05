<script lang="ts">
  import { slide } from 'svelte/transition';
  import type { Client } from '$lib/data/clients';
  import Image from '$components/base/Image.svelte';

  export let client: Client;

  // Dropdown controls
  let expanded = false;
  const toggle = () => (expanded = !expanded);

  // TODO: Checks for whether it even needs to be expanded
  const expandable = client?.projects.length > 0;
</script>

<div class="flex flex-row items-center gap-8 border-b border-white/25 py-12 px-4">
  <!-- Dropdown Arrow -->
  {#if expandable}
    <span
      class="icon-[material-symbols--keyboard-arrow-down] h-10 w-10 opacity-50 transition-all hover:cursor-pointer"
      class:rotate-180={expanded}
      on:mousedown={toggle}
    />
  {:else}
    <span class="h-10 w-10 opacity-50" />
  {/if}

  <!-- Headings -->
  <div class="flex w-1/4 flex-col gap-3">
    <div class="flex flex-row items-center">
      <!-- Status Dot -->
      <div class="h-2 w-2 rounded-full {client.end ? 'bg-red-500' : 'bg-green-500'}" />

      <!-- Date -->
      <span class="pl-2 opacity-75">{client.start ?? 'Unknown'} - {client.end ?? 'Now'}</span>
    </div>

    <!-- TODO: Link component -->
    <div class="flex flex-row items-center">
      <!-- Client Logo -->
      <Image width="30px" height="30px" class="h-11 w-11 rounded-xl" picture={client.avatar} alt="Company Logo" />

      <!-- Project name -->
      <h1 class="pl-4 text-2xl font-bold">{client.name}</h1>

      <!-- Arrow Icon -->
      <span class="icon-[material-symbols--arrow-outward] ml-4 h-6 w-6" />
    </div>
  </div>

  <!-- Description -->
  <span class="flex-1 opacity-50">{client.description}</span>
</div>

{#if expanded}
  <!-- TODO: Link to another page -->
  <div class="flex flex-col gap-8 border-b border-white/25 py-12" transition:slide>
    <h1>Expanded</h1>
  </div>
{/if}
