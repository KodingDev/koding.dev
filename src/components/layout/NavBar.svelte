<script lang="ts">
  import Image from '$components/base/Image.svelte';
  import { FEATURED_ARTIST } from '$lib/data/commissions';
  import DesktopNavBar from './DesktopNavBar.svelte';
  import MobileNavBar from './MobileNavBar.svelte';

  // Current page checker
</script>

<div class="flex h-24 border-b border-b-white/10">
  <div class="my-auto flex w-full flex-row items-center">
    <!-- Avatar -->
    <Image class="aspect-square h-11 w-11 rounded-xl object-cover object-top" picture={FEATURED_ARTIST.commission.images[0]} alt="Logo" />
    <div class="flex-grow md:hidden" />

    <!-- Navigation -->
    <DesktopNavBar />
    <!-- <MobileNavBar /> -->
  </div>
</div>
