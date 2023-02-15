<script lang="ts">
  import { LANGUAGES, type Project } from '$lib/data/projects';

  export let project: Project;

  // Fetch the language
  const language = LANGUAGES[project.language];
</script>

<a
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  class="hoverable hoverable-card flex flex-col gap-3 border border-white/10 bg-gradient-to-b from-white/[2.5%] p-6 transition-all duration-300 hover:scale-[101%] hover:to-white/[5%] hover:shadow-md"
>
  <div class="flex flex-row items-center">
    <!-- Language icon -->
    <span class="{language.icon} h-5 w-5" />

    <!-- Language name -->
    <span class="ml-2 opacity-75">{language.name}</span>

    <!-- Year -->
    <span class="ml-auto opacity-75">{project.year ?? 'Current'}</span>
  </div>

  <div class="flex flex-row items-center">
    <!-- Project name -->
    <h1 class="text-2xl font-bold">{project.name}</h1>

    <!-- Arrow Icon -->
    <span class="icon-[material-symbols--arrow-outward] ml-4 h-6 w-6" />
  </div>

  <span class="opacity-75">{project.description}</span>
</a>
