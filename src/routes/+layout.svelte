<script lang="ts">
	// Highlight Js
	import highlightTheme from 'svelte-highlight/styles/material-darker';

	// Layout
	import Footer from '$components/base/Footer.svelte';
	import GradientCanvas from '$components/base/GradientCanvas.svelte';
	import NavBar from '$components/base/NavBar.svelte';

	// Styling
	import '../app.postcss';

	// Navigation
	import { navigating } from '$app/stores';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';

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

<svelte:head>
	{@html highlightTheme}
</svelte:head>

<div class="mx-auto flex min-h-screen w-full flex-col">
	<div class="px-8 pt-8">
		<NavBar />
	</div>

	<div class="h-full grow pt-12 md:px-8">
		<div class="fixed left-0 top-0 -z-50 h-screen w-screen opacity-10">
			<GradientCanvas />
		</div>

		<slot />
	</div>

	<div class="px-8 pb-8">
		<Footer />
	</div>
</div>
