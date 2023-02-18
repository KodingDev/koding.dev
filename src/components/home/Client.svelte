<script lang="ts">
  import { slide } from 'svelte/transition';
  import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte';

  // Dropdown controls
  let expanded = false;
  const toggle = () => (expanded = !expanded);
</script>

<div
  class="flex flex-row items-center gap-8 border-b border-white/25 py-12 px-4 transition-all hover:cursor-pointer hover:bg-white/[2.5%]"
  on:mousedown={toggle}
>
  <!-- TODO: Dropdown arrow -->
  <!-- Dropdown Arrow -->
  <span class="h-6 w-6 opacity-50 transition-all" class:rotate-180={expanded}> <FaChevronDown /></span>

  <!-- Headings -->
  <div class="flex w-1/4 flex-col gap-3">
    <div class="flex flex-row items-center">
      <!-- Status Dot -->
      <div class="h-2 w-2 rounded-full bg-green-500" />

      <!-- Date -->
      <span class="pl-2 opacity-75">2021 - Now</span>
    </div>

    <div class="flex flex-row items-center">
      <!-- Client Logo -->
      <img class="h-11 w-11 rounded-xl" src="https://avatars.githubusercontent.com/u/89606108?s=200&v=4" alt="Company Logo" />

      <!-- Project name -->
      <h1 class="pl-4 text-2xl font-bold">MC Party</h1>

      <!-- Arrow Icon -->
      <span class="ml-6">
        <svg class="h-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.72308 16L0 14.2769L11.8154 2.46154H1.23077V0H16V14.7692H13.5385V4.18461L1.72308 16Z" fill="white" />
        </svg>
      </span>
    </div>
  </div>

  <!-- Description -->
  <span class="flex-1 opacity-50"
    >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia volupta.</span
  >
</div>

{#if expanded}
  <div class="flex flex-col gap-8 border-b border-white/25 py-12" transition:slide>
    <h1>Expanded</h1>
  </div>
{/if}
