<script lang="ts">
  let expanded = false;
</script>

<div class="flex-grow md:hidden" />

<!-- Menu Button -->
<div class="hover:cursor-pointer md:hidden" on:mousedown={() => (expanded = !expanded)}>
  <span class="icon-[mdi--menu] text-2xl text-white" />
</div>

<!-- Mobile Navigation -->
<!-- TODO: Implement -->
