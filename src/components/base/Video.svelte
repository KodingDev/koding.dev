<script lang="ts">
  import { fade } from 'svelte/transition';

  export let src: string;

  let className: string;
  // noinspection ReservedWordAsName
  export { className as class };

  // Video state
  let video: HTMLVideoElement;
  let paused = false;

  $: {
    if (paused) video?.pause();
    else video?.play();
  }
</script>

<div class="relative h-full">
  <video class={className} muted loop on:click={() => (paused = !paused)} bind:this={video}>
    <source {src} type="video/mp4" />
    <track kind="captions" />
  </video>

  <!-- Overlays -->
  <div class="group pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <!-- Pause indicator -->
      {#if paused}
        <div class="flex flex-col items-center justify-center rounded-full bg-black/50 p-4" transition:fade|global={{ duration: 100 }}>
          <span class="icon-[mdi--play] h-8 w-8" />
        </div>
      {/if}
    </div>
  </div>
</div>
