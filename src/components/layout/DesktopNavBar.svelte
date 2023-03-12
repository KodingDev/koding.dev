<script lang="ts">
  import { page } from '$app/stores';
  import { NAV_LINKS, NAV_SOCIALS } from '$lib/data/layout';
  import clsx from 'clsx';
  import { onMount } from 'svelte';
  import SocialButton from './SocialButton.svelte';

  // Tweening for the indicator
  let visible = false;
  let navTween = {
    left: '50%',
    top: 0,
    right: '50%',
  };

  // Click handler
  function updateLink(el: HTMLElement) {
    visible = true;
    navTween = {
      left: el.offsetLeft,
      right: el.parentElement.offsetWidth - el.offsetLeft - el.clientWidth,
      top: el.offsetTop + el.offsetHeight,
    };
  }

  // Indicators
  let indicators: HTMLElement[] = NAV_LINKS.map(() => undefined);

  // Recompute function
  function recompute() {
    // Find the current link
    const currentLink = NAV_LINKS.find((link) => link.match.test($page.url.pathname));
    if (!currentLink) {
      visible = false;
      return;
    }

    // Handle the link click
    const index = NAV_LINKS.indexOf(currentLink);
    const indicator = indicators[index];
    if (!indicator) return;

    updateLink(indicator);
  }

  // Load the initial indicator
  onMount(recompute);
  page.subscribe(recompute);
</script>

<div class="relative hidden w-fit flex-row items-center justify-end gap-4 pl-12 md:flex md:gap-12 md:pl-24">
  {#each NAV_LINKS as link, index}
    <a class="group relative text-lg font-medium text-white opacity-75" href={link.href} bind:this={indicators[index]}>
      {link.name}
      <div
        class={clsx(
          'absolute -bottom-1 left-0 h-1 w-full rounded-full bg-transparent transition-all',
          !link.match.test($page.url.pathname) ? 'group-hover:bg-primary-200/50' : ''
        )}
      />
    </a>
  {/each}

  <!-- Nav link underline -->
  <div
    class="pointer-events-none absolute h-1 rounded-full bg-primary-200/50 transition-all duration-500 {visible ? '' : 'opacity-0'}"
    style="left: {navTween.left}px; right: {navTween.right}px; top: {navTween.top}px;"
  />
</div>

<div class="hidden flex-grow flex-row items-center justify-end gap-4 md:flex">
  {#each NAV_SOCIALS as social}
    <SocialButton {...social} />
  {/each}
</div>
