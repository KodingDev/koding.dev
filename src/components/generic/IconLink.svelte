<script lang="ts">
  export let href: string;
  const domain = new URL(href).hostname;

  export let prefix: string | undefined = undefined;
  export let suffix: string | undefined = `${domain} →`;
</script>

<div class="flex flex-row items-center gap-1 text-neutral-400 transition-all group-hover:text-neutral-200">
  {#if prefix}<span>{prefix}</span>{/if}
  <img src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`} alt={domain} class="h-4 w-4 object-cover" />
  {#if suffix}<span>{suffix}</span>{/if}
</div>
