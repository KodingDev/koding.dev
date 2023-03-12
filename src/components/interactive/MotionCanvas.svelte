<script lang="ts">
  import '@motion-canvas/player';

  export let name: string;
  export let autoPlay = true;

  let className = '';
  // noinspection ReservedWordAsName
  export { className as class };
</script>

<div class="relative flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-primary-900 {className}">
  <motion-canvas-player class="absolute aspect-video min-w-[150vw]" src="/motion-canvas/{name}.js" auto={autoPlay} />
</div>
