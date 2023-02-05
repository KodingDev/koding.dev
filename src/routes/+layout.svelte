<script lang="ts">
	import { navigating } from '$app/stores';
	import Footer from '$components/base/Footer.svelte';
	import GradientCanvas from '$components/base/GradientCanvas.svelte';
	import NavBar from '$components/base/NavBar.svelte';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';
	import { fade } from 'svelte/transition';
	import '../app.postcss';
	import type { PageData } from './$types';

	export let data: PageData;

	NProgress.configure({
		showSpinner: false,
		easing: 'ease',
		speed: 250,
		minimum: 0.3
	});

	$: {
		if ($navigating) NProgress.start();
		if (!$navigating) NProgress.done();
	}
</script>

<div class="mx-auto flex min-h-screen w-full flex-col">
	<div class="px-8 pt-8">
		<NavBar />
	</div>

	<div class="h-full grow pt-12 md:px-8">
		<div class="fixed left-0 top-0 -z-50 h-screen w-screen opacity-10">
			<GradientCanvas />
		</div>

		{#key data.pathname}
			<div in:fade={{ duration: 250, delay: 250 }} out:fade={{ duration: 250 }}>
				<slot />
			</div>
		{/key}
	</div>

	<div class="px-8 pb-8">
		<Footer />
	</div>
</div>
