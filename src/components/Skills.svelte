<script>
	import { skillIcon } from '../utils/SkillIcons';
</script>

<div class="skills">
	<div class="skills__title">Skills</div>
	<div class="skills__grid">
		{#each skillIcon as icon}
			<div class="skills__grid__icons">
				<img src={icon.src} alt={icon.alt} />
				<h6>{icon.alt}</h6>
			</div>
		{/each}
	</div>
</div>
