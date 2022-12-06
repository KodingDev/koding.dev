<script lang="ts">
	import { getURL, type CommissionData } from '$lib/data/commissions';

	export let commission: CommissionData;
</script>

<a href={commission.slug ? `/art/${commission.slug}` : undefined}>
	<div
		class="flex flex-col border-[1px] rounded-lg overflow-clip border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 bg-opacity-70 transition-all hover:scale-[101%]"
	>
		<img
			src={getURL(commission.images[0])}
			alt={commission.title}
			class="object-cover object-top aspect-square"
		/>

		<div class="p-4">
			<h2 class="font-medium text-blue-400">{commission.title}</h2>
			<p class="text-body line-clamp-2 text-ellipsis">
				By {commission.artist.name}
			</p>
		</div>
	</div>
</a>
