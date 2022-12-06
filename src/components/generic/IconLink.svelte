<script lang="ts">
	export let href: string;
	const domain = new URL(href).hostname;

	export let prefix: string | undefined = undefined;
	export let suffix: string | undefined = `${domain} →`;
</script>

<div
	class="flex flex-row gap-1 text-neutral-400 group-hover:text-neutral-200 transition-all items-center"
>
	{#if prefix}<span>{prefix}</span>{/if}
	<img
		src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
		alt={domain}
		class="w-4 h-4 object-cover"
	/>
	{#if suffix}<span>{suffix}</span>{/if}
</div>
