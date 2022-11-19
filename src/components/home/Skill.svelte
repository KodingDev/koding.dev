<script lang="ts">
	import type { Skill } from "src/routes/+page.server";


    export let skill: Skill;
</script>

<span class="p-2 rounded font-semibold" style="background-color: {skill.color};">{skill.name}</span>