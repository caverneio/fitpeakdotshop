<script>
	import ProductCard from './ProductCard.svelte';
	let products = [
		{
			id: 'askh3',
			name: 'Retro Shoe',
			price: 89,
			image: '/sample_product.jpg',
			stock: true
		},
		{
			id: '2zdjn4',
			name: 'Retro Shoe',
			price: 89,
			image: '/sample_product.jpg',
			stock: true
		},
		{
			id: 'sjd7',
			name: 'Retro Shoe',
			price: 89,
			image: '/sample_product.jpg',
			stock: true
		}
	];
</script>

<svelte:head>
	<title>Landing page</title>
</svelte:head>

<h1 class="text-3xl font-bold underline">Hello world!</h1>

<div class="my-16 flex justify-start">
	<ProductCard {...products[0]} />
</div>
<div class="my-16 flex justify-end">
	<ProductCard {...products[1]} />
</div>
<div class="my-16 flex justify-start">
	<ProductCard {...products[2]} />
</div>

<style lang="postcss">
	:global(main) {
		background-image: url('/banner_0.jpg');
	}
</style>
