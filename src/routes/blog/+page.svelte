<script lang="ts">
  import Image from '$components/base/Image.svelte';
  import Seo from '$components/seo/Seo.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Seo title="Blog" slug="/blog" />

<div class="layout-container pt-40 pb-36">
  <div class="flex flex-col gap-3">
    <p class="text-2xl font-medium"><span class="pr-4">📖</span> Blog</p>
    <h1 class="text-5xl font-bold leading-[1.8] sm:text-5xl sm:leading-[1.8]">My thoughts on software development, web development, and more.</h1>
  </div>

  <div class="flex flex-col gap-8 pt-32">
    <!-- TODO: Cleanup, tags -->
    {#each data.posts as post}
      <a href="/blog/{post.slug}" class="flex flex-col items-center justify-between border-b border-b-white/[15%] pb-9 md:flex-row">
        <!-- TODO: Make the below a component -->
        <div class="flex flex-col gap-3 py-9 md:py-0">
          <!-- Date -->
          <span
            >{new Date(post.metadata.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}</span
          >

          <!-- Title -->
          <h2 class="text-2xl font-bold">{post.metadata.title}</h2>

          <!-- Excerpt -->
          <span class="opacity-50">{post.metadata.description ?? 'Take a read :)'}</span>
        </div>

        {#if post.metadata.cover}
          <Image picture={post.metadata.cover} alt="" class="aspect-video w-full rounded-xl border border-white/25 object-cover md:w-48" />
        {/if}
      </a>
    {/each}
  </div>
</div>
