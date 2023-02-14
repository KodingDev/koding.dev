<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { cubicOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';

  // Randomly move the star around by tweening its x and y coordinates
  // in an offset from its original position, using a sine wave to
  // create a smooth, natural motion

  let xTween = tweened(0, { duration: 1000, easing: cubicOut });
  let yTween = tweened(0, { duration: 1000, easing: cubicOut });

  // Randomly change the star's size and opacity
  let size = tweened(Math.random() * 20 + 10, { duration: 1000, easing: cubicOut });
  let opacityTween = tweened(Math.random() * 0.5 + 0.5, { duration: 1000, easing: cubicOut });

  // Perform the movement and size/opacity changes on mount
  let lastTimeout;

  onMount(() => {
    function update() {
      xTween.set(Math.random() * 20 - 10);
      yTween.set(Math.random() * 20 - 10);
      opacityTween.set(Math.random() * 0.5 + 0.5);
      size.set(Math.random() * 20 + 10);

      lastTimeout = setTimeout(update, Math.random() * 1000 + 1000);
    }

    update();
  });
  onDestroy(() => clearTimeout(lastTimeout));
</script>

<div class="relative">
  <div class="absolute" style="left: {$xTween}px; top: {$yTween}px; width: {$size}px; height: {$size}px; opacity: {$opacityTween};">
    <slot />
  </div>
</div>
