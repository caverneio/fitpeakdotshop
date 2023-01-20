<script>
	import '../app.css';
	import '@fontsource/inter';
</script>

<nav class="sticky z-50 top-0 flex items-center bg-slate-900/90 h-16 w-full text-white">
	<a href="/">
		<div class="flex items-center">
			<img alt="logo" width="50" src="/icon.svg" />
			<span class="font-bold text-lg tracking-wide">fitpeak</span>
		</div>
	</a>
</nav>

<main class="sm:px-16 py-2"><slot /></main>

<style>
	body {
		font-family: 'Inter', sans-serif;
	}
</style>
