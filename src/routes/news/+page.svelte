<script lang="ts">
	import axios from 'axios';
	import NewsContainer from '../../components/NewsContainer.svelte';
	export let data: any;

	let articles = data.articles.filter((_: any, id: number) => id < 10);
	let input: string = '';

	const getArticles = async () => {
		const response = await axios.get(
			`https://newsapi.org/v2/everything?q=${input}&apiKey=41fe10ca82d24eb88fe16ff10a8307c0`
		);

		articles = response.data.articles.filter((_: any, id: number) => id < 10);
	};
</script>

<section>
	<h2>The Hacker News</h2>

	<form on:submit|preventDefault={getArticles}>
		<input type="text" name="" class="search-input" bind:value={input} />
		<button type="submit" class="search-btn">Search</button>
	</form>
	<NewsContainer {articles} />
</section>

<style>
	.search-input {
		height: 25px;
		width: 220px;
	}

	.search-btn {
		padding: 0.4rem 1rem;
	}
</style>
