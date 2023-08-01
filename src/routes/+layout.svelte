<script>
	import './styles.css';
</script>

<div class="app">
	<h2>The Hacker News</h2>

	<div>
		<input type="text" name="" class="search-input" />
		<button class="search-btn">Search</button>
	</div>

	<main>
		<slot />
	</main>
</div>

<style>
	.search-input {
		height: 25px;
		width: 220px;
	}

	.search-btn {
		padding: 0.4rem 1rem;
	}
</style>
