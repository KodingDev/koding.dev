<script lang="ts">
  import { page } from '$app/stores';
  import SEO from '$components/seo/SEO.svelte';
</script>

<SEO title="Error" slug="/" />

<div class="text-center">
  <h1 class="text-[10rem] font-bold dark:text-neutral-300">
    {$page.status}
  </h1>
  <h2 class="text-4xl font-semibold dark:text-neutral-500">
    {$page.error?.message ?? 'Unknown error'}
  </h2>
</div>
