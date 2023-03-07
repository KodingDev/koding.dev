<script lang="ts">
  import Image from '$components/base/Image.svelte';
  import MediaEmbed from '$components/base/MediaEmbed.svelte';
  import ClientCallToAction from '$components/clients/ClientCallToAction.svelte';
  import Hoverable from '$components/interactive/Hoverable.svelte';
  import IconLink from '$components/interactive/IconLink.svelte';
  import Link from '$components/interactive/Link.svelte';
  import Seo from '$components/seo/Seo.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Seo title={data.client.name} slug={data.slug} description={data.client.description} />

<div class="layout-container flex flex-col gap-8 pt-32 pb-36">
  <Link href="/clients" style="back" class="opacity-50">Back to all clients</Link>
  <ClientCallToAction client={data.client} />

  <div class="flex flex-col gap-16 pt-8">
    <!-- TODO: Handle when there are no projects -->
    {#each data.client.projects as project}
      <div class="flex flex-col gap-6">
        <!-- Name & description -->
        <div class="flex flex-row items-center gap-4">
          {#if project.avatar}
            <Image picture={project.avatar} class="h-12 w-12 rounded-lg" />
          {/if}

          <h2 class="text-3xl font-bold">{project.name}</h2>
        </div>
        <span class="opacity-50">{project.description}</span>

        <!-- Links -->
        {#if project.links?.length}
          <div class="flex flex-row gap-4 overflow-x-scroll">
            {#each project.links as link}
              <IconLink href={link.href} icon={link.icon ?? 'icon-[mdi--web]'}>{link.name}</IconLink>
            {/each}
          </div>
        {/if}

        <!-- Media carousel -->
        {#if project.media?.length}
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {#each project.media as media}
              <div class="overflow-clip rounded-lg border border-white/[15%]">
                <!-- Waiting on: https://github.com/sveltejs/svelte/pull/8304 -->
                <Hoverable active={!!media.caption}>
                  <svelte:fragment slot="content">
                    {#if typeof media.media === 'string'}
                      <!-- Website embeds -->
                      <MediaEmbed src={media.media} class="h-full w-full object-cover" />
                    {:else if typeof media.media === 'object'}
                      <Image picture={media.media} class="h-full w-full object-cover transition-all duration-500 group-hover:scale-105" />
                    {/if}
                  </svelte:fragment>

                  <svelte:fragment slot="hover">
                    <span class="opacity-50">{media.caption}</span>
                  </svelte:fragment>
                </Hoverable>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    {/each}

    <!-- Testimonials -->
    {#if data.client.testimonials && data.client.testimonials.length}
      <div class="flex flex-col gap-6">
        <h2 class="text-3xl font-bold">Testimonials</h2>
        <span class="opacity-50">I've worked with some amazing people, here's what they have to say about me.</span>

        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {#each data.client.testimonials as testimonial}
            <div class="flex flex-col items-center gap-6 rounded-lg border border-white/[15%] bg-white/[5%] p-6">
              <div class="flex flex-row items-center gap-4">
                <Image picture={testimonial.avatar} class="h-12 w-12 rounded-lg" />

                <div class="flex flex-col">
                  <span class="font-bold">{testimonial.name}</span>
                  <span class="opacity-50">{testimonial.role}</span>
                </div>
              </div>

              <!-- 
                Testimonials can have certain elements highlighted by surrounding them with *[WORD]*,
                this is done by replacing the * with a span with the class "opacity-75"
              -->
              <div class="text-center text-xl text-white/50">
                {#each testimonial.testimonial.split('*') as part, index}
                  {#if index % 2}
                    <span class="text-white/75">{part}</span>
                  {:else}
                    {part}
                  {/if}
                {/each}
              </div>
              <!-- <span class="text-center text-xl opacity-50">&OpenCurlyDoubleQuote; &CloseCurlyDoubleQuote;</span> -->
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>
