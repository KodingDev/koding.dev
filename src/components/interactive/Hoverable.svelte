<script lang="ts">
  export let active = false;
</script>

<div class="group relative h-full">
  <slot name="content" />

  {#if $$slots.hover && active}
    <div
      class="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-black/50 p-6 opacity-0 transition-all group-hover:opacity-100"
    >
      <div class="flex translate-y-2 flex-col transition-all duration-500 group-hover:translate-y-0">
        <slot name="hover" />
      </div>
    </div>
  {/if}
</div>
