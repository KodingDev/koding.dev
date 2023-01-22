<script lang="ts">
	import { page } from '$app/stores';
	import clsx from 'clsx';

	export let to: string;
	export let mode: 'startswith' | 'exact' = 'startswith';

	const newTab = !to.startsWith('/');

	$: active = mode === 'exact' ? $page.url.pathname === to : $page.url.pathname.startsWith(to);
</script>

<a
	href={to}
	class={clsx('opacity-75 transition-all hover:opacity-100', active ? 'font-bold' : '')}
	target={newTab ? '_blank' : undefined}
	rel={newTab ? 'noreferrer' : undefined}
>
	<slot />
</a>
