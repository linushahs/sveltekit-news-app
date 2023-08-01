<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="">
	<h2>The Hacker News</h2>

	<div>
		<input type="text" name="" class="search-input" />
		<button class="search-btn">Search</button>
	</div>

	<!-- List of news---- -->
	<div class="news-container">
		<div class="news-box">
			<img src="" alt="img" class="news-poster" />
			<h3>Title</h3>
			<p>Description</p>
			<button>Read more</button>
		</div>
	</div>
</section>

<style>
	.search-input {
		height: 25px;
		width: 220px;
	}

	.search-btn {
		padding: 0.4rem 1rem;
	}

	.news-container {
		display: flex;
		gap: 1.5rem;
		margin: 2rem 0;
	}
	.news-box {
		width: 300px;
		height: fit-content;
		border: 1px solid black;
		border-radius: 8px;
		padding: 1rem;
	}

	.news-poster {
		width: 100%;
		height: 80px;
	}
</style>
