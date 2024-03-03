<script lang="ts">
  export let href: string;
  export let icon = 'icon-[material-symbols--web]';
</script>

<a
  {href}
  target="_blank"
  rel="noopener noreferrer"
  class="group flex flex-row items-center gap-2 rounded-full border-2 border-white/10 px-5 py-3 transition-all hover:border-white/25"
>
  <!-- TODO: Icon links -->
  <span class="{icon} h-4 w-4 fill-white" />
  <span><slot /></span>
  <span class="icon-[material-symbols--arrow-outward] h-4 w-4 transition-all group-hover:-translate-y-1" />
</a>
