<script lang="ts">
  import Seo from '$components/seo/Seo.svelte';

  import Project from '$components/home/Project.svelte';
  import TwinklingStar from '$components/home/TwinklingStar.svelte';
  import CallToAction from '$components/interactive/CallToAction.svelte';
  import Link from '$components/interactive/Link.svelte';
  import MotionCanvas from '$components/motion-canvas/MotionCanvas.svelte';
  import { PROJECTS } from '$lib/data/projects';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Seo title="Home" slug="/" />

<div class="flex flex-col gap-16 pb-36">
  <!-- TODO: Check height calc on mobile -->
  <!-- calc = full height - h-24 (navbar / 6 rem) -->
  <!-- Header -->
  <div class="layout-container flex h-[calc(100vh-6rem)]">
    <div class="relative my-auto 2xl:w-2/3">
      <!-- Titles -->
      <p class="text-2xl font-medium"><span class="pr-4">👋</span> Hi, I'm Stella</p>
      <h1 class="pt-6 text-3xl font-bold leading-[1.8] sm:text-5xl sm:leading-[1.8]">
        An experienced software engineer with <span class="whitespace-nowrap rounded-xl bg-primary-200 px-2 py-1">8 years</span> of experience in the gaming industry.
      </h1>

      <!-- Highlights -->
      <!-- TODO: Make these look good on small screens -->
      <div class="hidden sm:block">
        <!-- Highlight - Yellow Start (Top Right) -->
        <div class="absolute top-10 right-0">
          <TwinklingStar>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.8813 1.31157C30.0941 1.00699 30.3956 0.775342 30.7447 0.648096C31.0938 0.520851 31.4736 0.504182 31.8326 0.600354C32.1915 0.696527 32.5121 0.900876 32.7508 1.18563C32.9895 1.47039 33.1348 1.82174 33.1668 2.19194L33.6144 7.20448C33.964 11.1347 35.1672 14.9412 37.14 18.3582C39.1128 21.7753 41.8078 24.7206 45.0367 26.9883L49.1504 29.8813C49.4549 30.0942 49.6866 30.3956 49.8138 30.7448C49.9411 31.0939 49.9577 31.4737 49.8616 31.8326C49.7654 32.1915 49.561 32.5122 49.2763 32.7509C48.9915 32.9896 48.6402 33.1349 48.27 33.1669L43.2609 33.6154C39.3308 33.965 35.5242 35.1682 32.1072 37.141C28.6901 39.1138 25.7449 41.8088 23.4771 45.0377L20.5841 49.1514C20.3712 49.4559 20.0698 49.6876 19.7207 49.8148C19.3715 49.9421 18.9917 49.9587 18.6328 49.8626C18.2739 49.7664 17.9533 49.562 17.7145 49.2773C17.4758 48.9925 17.3306 48.6412 17.2985 48.271L16.85 43.2619C16.5005 39.3318 15.2973 35.5252 13.3244 32.1082C11.3516 28.6911 8.65663 25.7459 5.42776 23.4781L1.31057 20.5842C1.00599 20.3713 0.774341 20.0698 0.647096 19.7207C0.51985 19.3716 0.50318 18.9918 0.599353 18.6329C0.695525 18.2739 0.899876 17.9533 1.18463 17.7146C1.46939 17.4759 1.82074 17.3306 2.19094 17.2986L7.20348 16.851C11.1337 16.5015 14.9402 15.2983 18.3572 13.3254C21.7743 11.3526 24.7196 8.65763 26.9873 5.42876L29.8813 1.31157Z"
                fill="#FAC230"
              />
            </svg>
          </TwinklingStar>
        </div>

        <!-- Highlight - Blue Star (Above "with") -->
        <div class="absolute top-[8.5rem] left-0">
          <TwinklingStar>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.4518 0.583141C12.5549 0.494121 12.6812 0.438699 12.8135 0.424409C12.9459 0.410119 13.0778 0.437653 13.1915 0.503269C13.3051 0.568886 13.395 0.669402 13.4488 0.791158C13.5026 0.912913 13.5177 1.05 13.4922 1.1838L13.1509 2.99659C12.8829 4.41782 12.9199 5.87044 13.2595 7.25301C13.5991 8.63559 14.233 9.9148 15.1169 11.0013L16.2427 12.3869C16.3262 12.489 16.3759 12.6161 16.3851 12.7508C16.3943 12.8855 16.3626 13.0213 16.2941 13.1399C16.2257 13.2584 16.1239 13.3538 16.0027 13.4132C15.8814 13.4726 15.7465 13.4931 15.6164 13.4718L13.8535 13.1896C12.4706 12.9674 11.0458 13.058 9.67866 13.4552C8.31154 13.8524 7.03501 14.5467 5.93821 15.4894L4.53956 16.6902C4.43647 16.7792 4.31017 16.8346 4.17783 16.8489C4.04548 16.8632 3.91352 16.8357 3.79987 16.77C3.68622 16.7044 3.59639 16.6039 3.5426 16.4821C3.4888 16.3604 3.47365 16.2233 3.4992 16.0895L3.83976 14.2779C4.1078 12.8566 4.07075 11.404 3.73118 10.0214C3.39162 8.63887 2.75773 7.35966 1.87378 6.27314L0.746851 4.88692C0.663365 4.7848 0.613646 4.65775 0.604451 4.52304C0.595256 4.38833 0.62703 4.25248 0.695457 4.13396C0.763884 4.01544 0.865644 3.92 0.986907 3.86061C1.10817 3.80121 1.24306 3.78075 1.37323 3.80199L3.1372 4.08482C4.52013 4.30709 5.9449 4.21645 7.31203 3.81923C8.67916 3.42202 9.95569 2.7278 11.0525 1.78506L12.4518 0.583141Z"
                fill="#0085FF"
              />
            </svg>
          </TwinklingStar>
        </div>

        <!-- Highlight - Yellow Star (Bottom Left) -->
        <div class="absolute -left-12 bottom-14">
          <TwinklingStar>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.2986 2.191C17.3306 1.8208 17.4759 1.46945 17.7146 1.18469C17.9533 0.899937 18.2739 0.695586 18.6329 0.599414C18.9918 0.503241 19.3716 0.519911 19.7207 0.647157C20.0698 0.774403 20.3713 1.00605 20.5842 1.31063L23.4781 5.42782C25.7459 8.65669 28.6911 11.3516 32.1082 13.3245C35.5252 15.2973 39.3318 16.5005 43.2619 16.85L48.271 17.2986C48.6412 17.3306 48.9925 17.4759 49.2773 17.7146C49.562 17.9533 49.7664 18.2739 49.8626 18.6329C49.9587 18.9918 49.9421 19.3716 49.8148 19.7207C49.6876 20.0698 49.4559 20.3713 49.1514 20.5842L45.0377 23.4771C41.8088 25.7449 39.1138 28.6902 37.141 32.1072C35.1682 35.5243 33.965 39.3308 33.6154 43.261L33.1669 48.27C33.1349 48.6402 32.9896 48.9916 32.7509 49.2764C32.5122 49.5611 32.1915 49.7655 31.8326 49.8616C31.4737 49.9578 31.0939 49.9411 30.7448 49.8139C30.3956 49.6866 30.0942 49.455 29.8813 49.1504L26.9883 45.0367C24.7206 41.8078 21.7753 39.1129 18.3582 37.1401C14.9412 35.1672 11.1347 33.964 7.20448 33.6145L2.19194 33.1669C1.82174 33.1348 1.47039 32.9896 1.18563 32.7509C0.900876 32.5121 0.696527 32.1915 0.600354 31.8326C0.504182 31.4737 0.520851 31.0939 0.648096 30.7448C0.775342 30.3956 1.00699 30.0942 1.31157 29.8813L5.42876 26.9874C8.65763 24.7196 11.3526 21.7744 13.3254 18.3573C15.2983 14.9402 16.5015 11.1337 16.851 7.20354L17.2986 2.191Z"
                fill="#FAC230"
              />
            </svg>
          </TwinklingStar>
        </div>

        <!-- Highlight - Blue Star (Bottom Right) -->
        <div class="absolute bottom-16 right-16">
          <TwinklingStar>
            <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.94148 1.32208C7.94713 1.09286 8.01207 0.878719 8.1275 0.708757C8.24292 0.538794 8.40323 0.421256 8.58662 0.372114C8.77002 0.322973 8.96762 0.344613 9.15256 0.434093C9.3375 0.523572 9.50082 0.676552 9.62031 0.872241L11.2443 3.51804C12.5169 5.59293 14.1253 7.35597 15.957 8.68403C17.7888 10.0121 19.7998 10.8732 21.8496 11.2072L24.4623 11.6348C24.6553 11.6657 24.8419 11.7664 24.9968 11.9233C25.1517 12.0802 25.2672 12.2856 25.3278 12.5116C25.3883 12.7376 25.391 12.9733 25.3353 13.1866C25.2796 13.3998 25.1684 13.5804 25.0166 13.7037L22.9678 15.3803C21.3596 16.6945 20.0486 18.4457 19.1262 20.5117C18.2039 22.5778 17.6926 24.9088 17.6279 27.342L17.5438 30.4431C17.5382 30.6723 17.4732 30.8865 17.3578 31.0564C17.2424 31.2264 17.0821 31.3439 16.8987 31.3931C16.7153 31.4422 16.5177 31.4206 16.3327 31.3311C16.1478 31.2416 15.9845 31.0886 15.865 30.8929L14.2416 28.2493C12.969 26.1744 11.3606 24.4114 9.52885 23.0833C7.69709 21.7553 5.68608 20.8942 3.63624 20.5602L1.02183 20.1331C0.828776 20.1022 0.64214 20.0014 0.487287 19.8446C0.332434 19.6877 0.216875 19.4823 0.156314 19.2563C0.0957533 19.0302 0.093128 18.7946 0.148795 18.5813C0.204462 18.368 0.315722 18.1874 0.467453 18.0641L2.51805 16.3871C4.12627 15.0729 5.43731 13.3217 6.35962 11.2556C7.28194 9.18963 7.79331 6.85862 7.85801 4.42538L7.94148 1.32208Z"
                fill="#0085FF"
              />
            </svg>
          </TwinklingStar>
        </div>

        <!-- Highlight - Curly Arrow -->
        <svg class="absolute left-52 top-2" width="142" height="42" viewBox="0 0 142 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.99996 7.20914C20.419 -3.2535 72.346 0.377738 64.9094 26.8656C59.4949 46.151 33.0382 40.6305 37.2888 25.2956C41.5394 9.96074 118.5 13.6255 140.5 34.6255M140.5 34.6255L130.776 40.544M140.5 34.6255L136.776 21.544"
            stroke="white"
            stroke-opacity="0.25"
            stroke-width="3"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>

  <!-- Projects -->
  <div class="layout-container">
    <div class="flex flex-col justify-between gap-4 pb-12 align-middle md:flex-row md:items-center">
      <h1 class="text-2xl font-medium"><span class="pr-4">💻</span> Projects</h1>
      <span class="font-medium opacity-50">Some of the cool things I've worked on.</span>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each PROJECTS as project}
        <Project {project} />
      {/each}
    </div>
  </div>

  <!-- Blog -->
  <div class="layout-container">
    <div class="flex flex-col gap-4 pb-12 align-middle md:flex-row md:items-center">
      <div class="flex flex-row items-center gap-4">
        <h1 class="text-2xl font-medium opacity-75"><span class="pr-4">📖</span> Blog</h1>
        <Link href="/blog" class="opacity-50">View all</Link>
      </div>
      <span class="flex-1 font-medium opacity-50 md:text-right">A collection of some of my thoughts and ramblings.</span>
    </div>

    <!-- Posts -->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each data.posts as post}
        <a
          href={`/blog/${post.slug}`}
          class="hoverable hoverable-card flex flex-col gap-3 border border-white/10 bg-gradient-to-b from-white/[2.5%] p-6 transition-all hover:scale-[101%] hover:shadow-xl"
        >
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
        </a>
      {/each}
    </div>
  </div>

  <!-- Clients -->
  <div class="layout-container">
    <CallToAction href="/clients">
      <div class="flex flex-col gap-3 px-6 py-8 md:px-10 md:py-14">
        <span class="text-2xl font-bold">Want to see more of my work?</span>
        <span class="opacity-50">Check out some of my clients.</span>
      </div>
    </CallToAction>
  </div>

  <div class="layout-container">
    <MotionCanvas name="project" class="aspect-[3] min-h-[52]" />
  </div>
</div>
