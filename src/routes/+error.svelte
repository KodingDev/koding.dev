<script lang="ts">
  import { page } from '$app/stores';
  import Seo from '$components/seo/Seo.svelte';
</script>

<Seo title="Error" description="Something went wrong" />

<div class="text-center">
  <h1 class="text-[10rem] font-bold dark:text-neutral-300">
    {$page.status}
  </h1>
  <h2 class="text-4xl font-semibold dark:text-neutral-500">
    {$page.error?.message ?? 'Unknown error'}
  </h2>
</div>
