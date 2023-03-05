<script lang="ts">
  import { navigating } from '$app/stores';
  import NavBar from '$components/layout/NavBar.svelte';
  import { FEATURED_ARTIST } from '$lib/data/commissions';
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

  // Nav links
  const links = [
    {
      name: 'Home',
      href: '/',
      match: /^\/$/,
    },
    {
      name: 'Blog',
      href: '/blog',
      match: /^\/blog/,
    },
    {
      name: 'Clients',
      href: '/clients',
      match: /^\/clients/,
    },
    {
      name: 'Art',
      href: '/art',
      match: /^\/art/,
    },
  ];

  // Social links
  const socials = [
    {
      href: 'https://twitter.com/KodingDev_',
      icon: 'icon-[mdi--twitter]',
      color: 'bg-[#1E96E8]/5',
    },
    {
      href: 'mailto:hello@koding.dev',
      icon: 'icon-[material-symbols--mail-rounded]',
      color: 'bg-[#8439FF]/5',
    },
    {
      href: 'https://github.com/KodingDev',
      icon: 'icon-[mdi--github]',
      color: 'bg-[#000000]/5',
    },
  ];
</script>

<div class="flex min-h-screen flex-col justify-between bg-primary-800">
  <!-- Navbar -->
  <div class="layout-container flex h-24 border-b border-b-white/10">
    <div class="my-auto flex w-full flex-row items-center">
      <img class="aspect-square h-11 w-11 rounded-xl object-cover object-top" src={FEATURED_ARTIST.commission.images[0]} alt="Logo" />
      <div class="flex-grow md:hidden" />
      <NavBar {links} />
      <div class="hidden flex-grow flex-row items-center justify-end gap-4 md:flex">
        {#each socials as social}
          <a class="flex h-11 w-11 rounded-xl border border-white/[15%] p-3 {social.color} group transition-all hover:border-2" href={social.href}>
            <div class="m-auto transition-all group-hover:-translate-y-1">
              <span class="{social.icon} opacity-75" />
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>

  <div>
    {#key data.pathname}
      <div in:fade={{ duration: 250, delay: 250 }} out:fade={{ duration: 250 }}>
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
