<script lang="ts">
  export let emoji: string;
  export let title: string;

  let className = '';
  export { className as class };
</script>

<div class="flex flex-col gap-3 {className}">
  <p class="text-2xl font-medium"><span class="pr-4">{emoji}</span> {title}</p>
  <h1 class="text-3xl font-bold leading-[1.8] sm:text-5xl sm:leading-[1.8]">
    <slot />
  </h1>
</div>
