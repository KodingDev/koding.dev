<script lang="ts">
  import { onMount } from 'svelte';

  // Randomly move the star around by tweening its x and y coordinates
  // in an offset from its original position, using a sine wave to
  // create a smooth, natural motion
  let data = { x: 0, y: 0, size: 0, opacity: 0 };

  // Create a random offset
  const offset = Math.random() * 5;

  // Create a random speed
  // 5 - 10
  let speed = 0;

  // Signed directions
  let directions = [-1, 1];

  const render = () => {
    // Update the completion status
    if (speed === 0 || data.opacity < 0.001) {
      speed = Math.random() * 15 + 5;
      directions = [Math.random() * 2 - 1, Math.random() * 2 - 1];
    }

    // Update the data
    data = {
      x: directions[0] * Math.sin(Date.now() / 1000 + offset) * speed,
      y: directions[1] * Math.sin(Date.now() / 1000 + offset) * speed,
      size: Math.sin(Date.now() / 1000 + offset) * speed + 20,
      opacity: Math.sin(Date.now() / 1000 + offset) * 0.5 + 0.5,
    };

    // Request the next frame
    requestAnimationFrame(render);
  };

  onMount(() => requestAnimationFrame(render));
</script>

<div class="relative">
  <div class="absolute" style="left: {data.x}px; top: {data.y}px; width: {data.size}px; height: {data.size}px; opacity: {data.opacity};">
    <slot />
  </div>
</div>
