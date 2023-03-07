<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  export let links: { name: string; href: string; match: RegExp }[];

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
  let indicators: HTMLElement[] = links.map(() => undefined);

  // Current page checker
  const isCurrent = (link: (typeof links)[0]) => link.match.test($page.url.pathname);

  // Recompute function
  function recompute() {
    // Find the current link
    const currentLink = links.find(isCurrent);
    if (!currentLink) {
      visible = false;
      return;
    }

    // Handle the link click
    const index = links.indexOf(currentLink);
    const indicator = indicators[index];
    if (!indicator) return;

    updateLink(indicator);
  }

  // Load the initial indicator
  onMount(recompute);
  page.subscribe(recompute);
</script>

<!-- TODO: Mobile nav-->
<div class="relative flex w-fit flex-row items-center justify-end gap-4 pl-12 sm:justify-start md:gap-12 md:pl-24">
  {#each links as link, index}
    <a class="group relative text-lg font-medium text-white opacity-75" href={link.href} bind:this={indicators[index]}>
      {link.name}
      <div class="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-transparent transition-all {isCurrent(link) ? 'group-hover:bg-primary-200/50' : ''}" />
    </a>
  {/each}

  <!-- Nav link underline -->
  <div
    class="pointer-events-none absolute h-1 rounded-full bg-primary-200/50 transition-all duration-500 {visible ? '' : 'opacity-0'}"
    style="left: {navTween.left}px; right: {navTween.right}px; top: {navTween.top}px;"
  />
</div>
