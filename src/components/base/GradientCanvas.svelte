<!-- Shamelessly stolen from https://codepen.io/tmrDevelops/pen/vOPZBv -->
<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;
  let t = 0;

  onMount(() => {
    canvas.classList.remove('opacity-0');
    const ctx = canvas.getContext('2d')!;

    const setColor = (x: number, y: number, r: number, g: number, b: number) => {
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x, y, 1, 1);
    };

    const calcR = (x: number, y: number, t: number) => Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));

    const calcG = (x: number, y: number, t: number) => Math.floor(70 + (64 * (x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3))) / 300);

    const calcB = (x: number, y: number, t: number) =>
      Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100));

    const draw = () => {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          const r = calcR(x, y, t);
          const g = calcG(x, y, t);
          const b = calcB(x, y, t);

          setColor(x, y, r, g, b);
        }
      }

      t += 0.03;
      window.requestAnimationFrame(draw);
    };

    draw();
  });
</script>

<canvas bind:this={canvas} width="32" height="32" class="h-full w-full opacity-0 transition-all duration-500" />
