<script lang="ts">
  import { navigating } from '$app/stores';
  import Logo from '$assets/commissions/siomi/1/main.png';
  import HoverListener from '$components/interactive/HoverListener.svelte';
  import '@fontsource/poppins/400.css';
  import '@fontsource/poppins/500.css';
  import '@fontsource/poppins/700.css';
  import NProgress from 'nprogress';
  import 'nprogress/nprogress.css';
  import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
  import FaGitHub from 'svelte-icons/fa/FaGithub.svelte';
  import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
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

<div class="min-w-screen min-h-screen bg-primary-800">
  <!-- Navbar -->
  <div class="layout-container flex h-24 border-b border-b-white/10">
    <div class="my-auto flex w-full flex-row items-center">
      <img class="aspect-square h-11 rounded-xl object-cover object-top" src={Logo} alt="Logo" />
      <div class="flex flex-1 flex-row items-center justify-end gap-12 pl-12 md:justify-start md:pl-24">
        <a class="text-lg font-medium text-white opacity-75" href="/">Home</a>
        <a class="text-lg font-medium text-white opacity-75" href="/blog">Blog</a>
        <a class="text-lg font-medium text-white opacity-75" href="/art">Art</a>
      </div>
      <div class="hidden flex-row items-center gap-4 md:flex">
        <a class="h-11 w-11 rounded-xl border border-white/[15%] bg-[#1E96E8]/5 p-3" href="https://twitter.com/KodingDev_">
          <span class="opacity-75"><FaTwitter /></span>
        </a>

        <a class="h-11 w-11 rounded-xl border border-white/[15%] bg-[#8439FF]/5 p-3" href="https://twitter.com/KodingDev_">
          <span class="opacity-75"><FaEnvelope /></span>
        </a>

        <a class="h-11 w-11 rounded-xl border border-white/[15%] bg-[#000000]/5 p-3" href="https://twitter.com/KodingDev_">
          <span class="opacity-75"><FaGitHub /></span>
        </a>
      </div>
    </div>
  </div>

  {#key data.pathname}
    <div in:fade={{ duration: 250, delay: 250 }} out:fade={{ duration: 250 }}>
      <slot />
    </div>
  {/key}

  <!-- Footer -->
  <div class="layout-container flex flex-row pb-24">
    <span class="flex-1 font-medium opacity-50">Copyright © Koding Development 2023</span>
    <span class="flex-1 text-right font-medium opacity-50">Stella, Software Engineer</span>
  </div>
</div>
