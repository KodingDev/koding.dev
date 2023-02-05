<script lang="ts">
  import IconLink from '$components/generic/IconLink.svelte';
  import type { CommissionData } from '$lib/data/commissions';
  import clsx from 'clsx';

  export let commission: CommissionData;
</script>

<div
  class={clsx(
    'flex flex-col content-between gap-6',
    commission.layout === 'horizontal' ? 'lg:flex-row' : ''
  )}
>
  <div class="flex flex-col gap-6">
    <h1 class="text-4xl font-bold">{commission.title}</h1>

    <div class="flex flex-row gap-4">
      {#if commission.artist.icon}
        <img
          src={commission.artist.icon}
          alt={commission.artist.name}
          class="h-12 w-12 rounded-full object-cover"
        />
      {/if}

      {#if commission.artist.link}
        <a
          href={commission.artist.link}
          class="group flex flex-col"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>By {commission.artist.name}</span>
          <IconLink href={commission.artist.link} />
        </a>
      {:else}
        <!-- TODO: Check -->
        <span>By {commission.artist.name}</span>
      {/if}
    </div>

    {#if commission.description}
      <div>
        <p class="font-semibold text-neutral-400">Description</p>
        <p>{commission.description}</p>
      </div>
    {/if}

    {#if commission.links}
      <div>
        <p class="font-semibold text-neutral-400">Links</p>
        <ul class="flex flex-col gap-4 sm:flex-row">
          {#each commission.links as link}
            <li>
              <a
                href={link.href}
                class="group flex flex-col"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{link.text}</span>
                <IconLink href={link.href} />
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</div>
