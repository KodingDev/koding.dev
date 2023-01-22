<script lang="ts">
	import type { Repository } from 'src/routes/+page.server';

	export let repository: Repository;
</script>

<a href={repository.link} rel="noopener noreferrer" target="_blank">
	<div
		class="flex flex-col gap-2 rounded-md border-[1px] border-neutral-300 bg-neutral-100 bg-opacity-70 p-4 transition-all hover:scale-[101%] dark:border-neutral-700 dark:bg-neutral-800"
	>
		<h2 class="font-medium text-blue-400">{repository.repo}</h2>
		<p class="text-body h-12 text-ellipsis line-clamp-2">
			{repository.description ?? 'Very mysterious!'}
		</p>

		<div class="flex flex-row items-center gap-2">
			<div
				class="h-2 w-2 rounded-full p-2"
				style:background-color={repository.languageColor ?? '#616161'}
			/>
			<span class="text-body text-black dark:text-neutral-400"
				>{repository.language ?? 'Generic'}</span
			>
		</div>
	</div>
</a>
