<script lang="ts">
  import Video from './Video.svelte';

  export let src: string;

  // Service regexes
  const YOUTUBE_REGEX = /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})(?:\S+)?/;

  // Local content (hosted on this site)
  const MP4_REGEX = /(\/[^/]+)+\.mp4$/;

  let className: string;
  // noinspection ReservedWordAsName
  export { className as class };
</script>

{#if src.match(YOUTUBE_REGEX)}
  <iframe
    title="YouTube video player"
    class={className}
    src="https://www.youtube.com/embed/{src.match(YOUTUBE_REGEX)[1]}?controls=0"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
{:else if MP4_REGEX.test(src)}
  <Video {src} class={className} />
{/if}
