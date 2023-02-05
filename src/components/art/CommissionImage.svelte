<script lang="ts">
  import clsx from 'clsx';

  export let src: string;
  export let title: string | undefined = undefined;
  export let subtitle: string | undefined = undefined;

  export let className: string | undefined = undefined;
</script>

<!-- Overlay a gradient over the image with the title overlayed -->
<a
  href={src}
  target="_blank"
  rel="noopener noreferrer"
  class={clsx(
    'relative overflow-clip rounded-3xl transition-all hover:scale-[101%] hover:shadow-2xl',
    className
  )}
>
  <img {src} alt={title} class="aspect-auto h-full w-full object-cover" />

  {#if title || subtitle}
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
    <div class="absolute inset-0 flex flex-col justify-end p-4">
      {#if title}<h1 class="text-2xl font-bold text-white">{title}</h1>{/if}
      {#if subtitle}<p class="text-neutral-200">{subtitle}</p>{/if}
    </div>
  {/if}
</a>
