<script>
	import { page } from '$app/stores';
	import NewsItem from '../../../components/NewsItem.svelte';
	const newsId = $page.params.newsId;
</script>

<NewsItem {newsId} />
