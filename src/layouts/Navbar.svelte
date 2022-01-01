<script lang="ts">
	import { contactIcons } from '../utils/ContactIcons';
</script>

<div class="nav">
	<p class="nav__brand">K</p>
	<div class="nav__icons">
		{#each contactIcons as icon}
			<a href={icon.link}>
				<img class="nav__icons__icon" src={icon.src} alt={icon.alt} />
			</a>
		{/each}
	</div>
</div>

<style>
</style>
