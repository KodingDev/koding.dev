<script lang="ts">
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

  <div class="flex flex-col pt-32">
    <!-- TODO: Cleanup, tags -->
    {#each data.posts as post}
      <a href="/blog/{post.slug}" class="flex flex-row items-center border-b border-b-white/[15%]">
        <!-- TODO: Make the below a component -->
        <div class="flex grow flex-col gap-3 py-9">
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

        <img src={post.metadata.cover} alt="" class="aspect-video h-32 rounded-xl border border-white/25 object-cover" />
      </a>
    {/each}
  </div>
</div>
