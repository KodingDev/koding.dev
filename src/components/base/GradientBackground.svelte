<script lang="ts">
  // real thx stella
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;
  let t = 0;

  onMount(() => {
    const ctx = canvas.getContext('2d')!;

    const setColor = (x: number, y: number, r: number, g: number, b: number) => {
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x, y, 1, 1);
    };

    const calcR = (x: number, y: number, t: number) => Math.floor(200 + 64 * Math.cos((x * x - y * y) / 300 + t));
    const calcG = (x: number, y: number, t: number) => Math.floor(50 + (64 * (x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3))) / 300);
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
      t += 0.02;
      window.requestAnimationFrame(draw);
    };

    draw();
    canvas.classList.remove('opacity-0');
  });

  let className = '';
  // noinspection ReservedWordAsName
  export { className as class };
</script>

<div class="absolute left-0 top-0 {className}">
  <canvas bind:this={canvas} width="32" height="32" class="h-full w-full opacity-0 transition-all duration-500" />
</div>
