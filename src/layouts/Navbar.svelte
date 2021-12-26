<script lang="ts">
	import { icons } from '../utils/Icons';
</script>

<div class="nav">
	<p class="nav__brand">Kevin</p>
	<div class="nav__icons">
		{#each icons as icon}
			<a href={icon.link}>
				<img class="nav__icons__icon" src={icon.src} alt={icon.alt} />
			</a>
		{/each}
	</div>
</div>

<style>
</style>
