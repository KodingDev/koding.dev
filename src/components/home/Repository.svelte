<script lang="ts">
	import type { Repository } from 'src/routes/+page.server';

	export let repository: Repository;
</script>

<a href={repository.link} rel="noopener noreferrer" target="_blank">
	<div
		class="flex flex-col gap-2 p-4 border-[1px] rounded-md border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 bg-opacity-70 transition-all hover:scale-[101%]"
	>
		<h2 class="font-medium text-blue-400">{repository.repo}</h2>
		<p class="text-body line-clamp-2 text-ellipsis h-12">
			{repository.description ?? 'Very mysterious!'}
		</p>

		<div class="flex flex-row gap-2 items-center">
			<div
				class="p-2 w-2 h-2 rounded-full"
				style:background-color={repository.languageColor ?? '#616161'}
			/>
			<span class="text-body text-black dark:text-neutral-400"
				>{repository.language ?? 'Generic'}</span
			>
		</div>
	</div>
</a>
