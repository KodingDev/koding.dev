<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-auto flex w-10/12 flex-col gap-10 pb-12">
	<div class="flex flex-col gap-4">
		<h1 class="text-4xl font-bold">Blog</h1>
		<p class="text-neutral-300">A collection of my thoughts and ramblings.</p>
	</div>

	{#each data.posts as post}
		<a
			href="/blog/{post.slug}"
			class="rounded-lg bg-neutral-800 p-4 transition-all hover:scale-[101%]"
		>
			<h2 class="text-2xl font-bold">{post.metadata.title}</h2>

			<div class="flex flex-row gap-2">
				<span class="text-neutral-300"
					>{new Date(post.metadata.date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}</span
				>

				{#if post.metadata.tags}
					{#each post.metadata.tags as tag}
						<span class="text-neutral-400">#{tag}</span>
					{/each}
				{/if}
			</div>
			<p class="pt-2">{post.metadata.description ?? 'Take a read :)'}</p>
		</a>
	{/each}
</div>
