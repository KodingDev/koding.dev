<script lang="ts">
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
  import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
  import MdEmail from 'svelte-icons/md/MdEmail.svelte';
  import NavLink from './NavLink.svelte';

  const links: {
    label: string;
    to: string;
    mode?: 'startswith' | 'exact';
  }[] = [
    { label: 'Home', to: '/', mode: 'exact' },
    { label: 'Art', to: '/art' },
    { label: 'Blog', to: '/blog' },
  ];
</script>

<div class="flex flex-row justify-between">
  <div class="flex flex-row items-center gap-6">
    <img src="https://avatars.githubusercontent.com/u/23714764?v=4" alt="Stella" class="h-10 w-10 rounded-full" />

    {#each links as { label, to, mode }}
      <NavLink {to} {mode}>{label}</NavLink>
    {/each}
  </div>

  <div class="flex flex-row items-center gap-6">
    <NavLink to="https://twitter.com/KodingDev_">
      <div class="icon sm">
        <FaTwitter />
      </div>
    </NavLink>

    <NavLink to="https://github.com/KodingDev">
      <div class="icon sm">
        <FaGithub />
      </div>
    </NavLink>

    <NavLink to="mailto:hello@koding.dev">
      <div class="icon sm">
        <MdEmail />
      </div>
    </NavLink>
  </div>
</div>
