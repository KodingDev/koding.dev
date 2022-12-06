<script lang="ts">
	import Footer from '$components/base/Footer.svelte';
	import GradientCanvas from '$components/base/GradientCanvas.svelte';
	import NavBar from '$components/base/NavBar.svelte';
	import '../app.postcss';

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

<div class="mx-auto flex flex-col w-full min-h-screen">
	<div class="pt-8 px-8">
		<NavBar />
	</div>

	<div class="pt-12 md:px-8 h-full grow">
		<div class="fixed left-0 top-0 w-screen h-screen -z-50 opacity-10">
			<GradientCanvas />
		</div>

		<slot />
	</div>

	<div class="pb-8 px-8">
		<Footer />
	</div>
</div>
