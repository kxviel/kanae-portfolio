<script>
	import { projectAssets } from '../assets/Project';
	import { projectList } from '../utils/ProjectList';
</script>

<div class="projects">
	<div class="projects__title">Projects</div>
	{#each projectList as project}
		<div class="projects__root">
			<div class="projects__root__image">
				<img src={project.src} alt={project.name} />
			</div>
			<div class="projects__root__desc">
				<p class="projects__root__desc__title">{project.name}</p>
				<p class="projects__root__desc__subtitle">{project.desc}</p>
				<div class="projects__root__desc__link">
					<a href={project.link}> Live Demo </a>
					<a href={project.github}> GitHub </a>
				</div>
				<div class="projects__root__desc__icons">
					{#each project.tech as img}
						<img src={img} alt="" />
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>
