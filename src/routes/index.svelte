<script>
	import '../styles/app.scss';
	import Navbar from '../layouts/Navbar.svelte';
	import About from '../components/About.svelte';
	import Skills from '../components/Skills.svelte';
	import Projects from '../components/Projects.svelte';
</script>

<section class="root">
	<Navbar />
	<About />
</section>
<section>
	<Skills />
</section>
<section>
	<Projects />
</section>
