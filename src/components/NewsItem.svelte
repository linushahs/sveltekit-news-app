<script lang="ts">
	export let newsId: string;
</script>

<section class="container">
	<a href="/news">Back</a>
	<img src="" alt="" />

	<h1>{newsId}</h1>
	<p />
	<p>Description</p>
</section>

<style>
	.container {
		display: flex;
		width: 100vw;
		height: 100vh;
		justify-content: center;
		padding-top: 5rem;
	}
</style>
