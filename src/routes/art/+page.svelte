<script lang="ts">
	import CommissionCard from '$components/art/CommissionCard.svelte';
	import CommissionImage from '$components/art/CommissionImage.svelte';
	import CommissionPage from '$components/art/CommissionPage.svelte';

	import SEO from '$components/seo/SEO.svelte';
	import { commissions, getURL, pinned } from '$lib/data/commissions';
</script>

<SEO title="Art" slug="/art" />

<div class="flex flex-col gap-2">
	<!-- Pinned card -->
	<div class="basic-card flex flex-col justify-between gap-4 lg:flex-row">
		<div class="flex flex-col justify-between">
			<CommissionPage commission={pinned} />
			<a class="link" href={`/art/${pinned.slug}`}>Click to view &rarr;</a>
		</div>

		<CommissionImage className="w-full lg:w-1/4" src={getURL(pinned.images[0])} />
	</div>

	<div class="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#each commissions.filter((c) => !c.hidden) as commission}
			<CommissionCard {commission} />
		{/each}
	</div>
</div>
