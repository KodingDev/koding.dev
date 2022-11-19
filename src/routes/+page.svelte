<script lang="ts">
	import Client from '$components/home/Client.svelte';
	import Repository from '$components/home/Repository.svelte';
	import { onInterval } from '../utils/utils';
	import GradientCanvas from '../components/home/GradientCanvas.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	// Calculate & update the years since I've started coding
	const calcYears = () => {
		const start = new Date('2015-01-01');
		const now = new Date();
		const diff = now.getTime() - start.getTime();
		return diff / (1000 * 60 * 60 * 24 * 365);
	};

	let years = calcYears();
	onInterval(() => years = calcYears(), 1000);
</script>

<div class="fixed left-0 top-0 w-screen h-screen -z-50 opacity-10">
	<GradientCanvas />
</div>

<div class="flex flex-col gap-10 w-10/12 mx-auto pb-12">
	<div class="flex flex-col gap-2">
		<h1 class="text-title">👋 Hi, I'm Stella</h1>
		<h2 class="text-subtitle">
			An experienced software engineer with {years.toFixed(10)} years of experience in the gaming industry.
		</h2>
	</div>

	<div class="flex flex-col gap-2">
		<h1 class="text-title">💻 Projects</h1>
		<h2 class="text-subtitle">Some of my personal projects, pulled from my GitHub.</h2>

		<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 pt-4">
			{#each data.pinned as repository}
				<Repository {repository} />
			{/each}
		</div>
	</div>

	<div class="flex flex-col gap-2">
		<h1 class="text-title">📫 Clients</h1>
		<h2 class="text-subtitle">
			I've worked with some great clients over the years. Here are some of them.
		</h2>

		<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 pt-4">
			{#each data.clients as client}
				<Client {client} />
			{/each}
		</div>
	</div>
</div>
