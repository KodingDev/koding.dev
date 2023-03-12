<script lang="ts">
  export let href: string;
  export let icon: string;
  export let color: string;
</script>

<a class="flex h-11 w-11 rounded-xl border border-white/[15%] p-3 {color} group transition-all hover:border-2" {href}>
  <div class="m-auto transition-all group-hover:-translate-y-1">
    <span class="{icon} opacity-75" />
  </div>
</a>
