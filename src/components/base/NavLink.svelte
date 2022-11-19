<script lang="ts">
	import { page } from '$app/stores';

	export let to: string;

	const newTab = !to.startsWith('/');

	$: active = $page.url.pathname === to;
</script>

<a
	href={to}
	class="opacity-75 hover:opacity-100 transition-all {active ? 'font-semibold underline' : ''}"
	target={newTab ? '_blank' : undefined}
	rel={newTab ? 'noreferrer' : undefined}
>
	<slot />
</a>
