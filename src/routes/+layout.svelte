<script lang="ts">
  import { navigating } from '$app/stores';
  import HoverListener from '$components/interactive/HoverListener.svelte';
  import NavBar from '$components/layout/NavBar.svelte';
  import NProgress from 'nprogress';
  import { fade } from 'svelte/transition';
  import '../app.postcss';
  import type { PageData } from './$types';

  export let data: PageData;

  NProgress.configure({
    showSpinner: false,
    easing: 'ease',
    speed: 250,
    minimum: 0.3,
  });

  $: {
    if ($navigating) NProgress.start();
    if (!$navigating) NProgress.done();
  }
</script>

<HoverListener />

<div class="flex min-h-screen flex-col justify-between bg-primary-800">
  <div class="layout-container">
    <NavBar />
  </div>

  <div>
    {#key data.pathname}
      <div in:fade|global={{ duration: 250, delay: 250 }} out:fade|global={{ duration: 250 }}>
        <slot />
      </div>
    {/key}
  </div>

  <!-- Footer -->
  <div class="layout-container flex flex-row pb-24">
    <span class="flex-1 font-medium opacity-50">Copyright © Koding Development 2023</span>
    <span class="flex-1 text-right font-medium opacity-50">Stella, Software Engineer</span>
  </div>
</div>
