<script>
	import NavLink from './NavLink.svelte';
	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import MdEmail from 'svelte-icons/md/MdEmail.svelte';

	const links = [{ label: 'Home', to: '/' }];
</script>

<div class="flex flex-row justify-between">
	<div class="flex flex-row gap-6 items-center">
		<img
			src="https://avatars.githubusercontent.com/u/23714764?v=4"
			alt="Stella"
			class="rounded-full w-10 h-10"
		/>

		{#each links as { label, to }}
			<NavLink {to}>{label}</NavLink>
		{/each}
	</div>

	<div class="flex flex-row gap-6 items-center">
		<NavLink to="https://twitter.com/KodingDev_">
			<div class="icon sm"><FaTwitter /></div>
		</NavLink>

		<NavLink to="https://github.com/KodingDev">
			<div class="icon sm"><FaGithub /></div>
		</NavLink>

		<NavLink to="mailto:hello@koding.dev">
			<div class="icon sm">
				<MdEmail />
			</div>
		</NavLink>
	</div>
</div>
