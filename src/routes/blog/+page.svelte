<script lang="ts">
  import Image from '$components/base/Image.svelte';
  import Header from '$components/base/Header.svelte';
  import Seo from '$components/seo/Seo.svelte';
  import type { PageData } from './$types';
  import { formatDate } from '$lib/util/html';

  export let data: PageData;
</script>

<Seo title="Blog" description="My thoughts on software development, web development, and more." />

<div class="layout-container pb-36 pt-40">
  <Header emoji="📖" title="Blog">My thoughts on software development, web development, and more.</Header>

  <div class="flex flex-col gap-8 pt-32">
    <!-- TODO: Cleanup, tags -->
    {#each data.posts as post}
      <a href="/blog/{post.slug}" class="flex flex-col items-center justify-between border-b border-b-white/[15%] pb-9 md:flex-row">
        <!-- TODO: Make the below a component -->
        <div class="flex flex-col gap-3 py-9 md:py-0">
          <!-- Date -->
          <span>{formatDate(new Date(post.metadata.date))}</span>

          <!-- Title -->
          <h2 class="text-2xl font-bold">{post.metadata.title}</h2>

          <!-- Excerpt -->
          <span class="opacity-50">{post.metadata.description ?? 'Take a read :)'}</span>
        </div>

        {#if post.metadata.cover}
          <Image
            alt="{post.metadata.title} Cover"
            maxWidth="80vw"
            picture={post.metadata.cover}
            class="aspect-video w-full rounded-xl border border-white/25 object-cover md:w-48"
          />
        {/if}
      </a>
    {/each}
  </div>
</div>
