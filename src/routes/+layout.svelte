<script>
	import Footer from '$components/base/Footer.svelte';
	import NavBar from '$components/base/NavBar.svelte';
	import '../app.postcss';
</script>

<div class="mx-auto flex flex-col w-full min-h-screen">
	<div class="pt-8 px-8">
		<NavBar />
	</div>

	<div class="pt-12 md:px-8 h-full grow">
		<slot />
	</div>

	<div class="pb-8 px-8">
		<Footer />
	</div>
</div>
