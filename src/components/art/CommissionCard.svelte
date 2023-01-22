<script lang="ts">
	import { getURL, type CommissionData } from '$lib/data/commissions';

	export let commission: CommissionData;
</script>

<a href={commission.slug ? `/art/${commission.slug}` : undefined}>
	<div
		class="flex flex-col overflow-clip rounded-lg border-[1px] border-neutral-300 bg-neutral-100 bg-opacity-70 transition-all hover:scale-[101%] dark:border-neutral-700 dark:bg-neutral-800"
	>
		<img
			src={getURL(commission.images[0])}
			alt={commission.title}
			class="aspect-square object-cover object-top"
		/>

		<div class="p-4">
			<h2 class="font-medium text-blue-400">{commission.title}</h2>
			<p class="text-body text-ellipsis line-clamp-2">
				By {commission.artist.name}
			</p>
		</div>
	</div>
</a>
