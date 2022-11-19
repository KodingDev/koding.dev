<script>
	import { page } from '$app/stores';
</script>

<div class="m-auto h-full relative -translate-y-10">
	<h1
		class="text-[16rem] font-bold dark:text-neutral-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
		style="-webkit-text-fill-color: transparent; -webkit-text-stroke: 1px;"
	>
		{$page.status}
	</h1>
	<h2 class="text-5xl font-bold dark:text-neutral-300">
		{$page.error?.message ?? 'Unknown error'}
	</h2>
</div>
