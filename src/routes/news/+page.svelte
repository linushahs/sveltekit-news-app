<script lang="ts">
	export let data;
	const articles = data.articles.filter((_: any, id: number) => id < 10);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="">
	<!-- List of news---- -->
	<div class="news-container">
		{#each articles as article, id (id)}
			<div class="news-box">
				<img src={article.urlToImage} alt="img" class="news-poster" />
				<h3>{article.title}</h3>
				<p>{article.description}</p>
				<button>Read more</button>
			</div>
		{/each}
	</div>
</section>

<style>
	.news-container {
		display: flex;
		flex-wrap: wrap;
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
		height: 160px;
		object-fit: cover;
	}
</style>
