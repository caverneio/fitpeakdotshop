<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.name}</title>
</svelte:head>

<!-- Image gallery -->
<div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
	<div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
		<img
			src="/images/002.jpg"
			alt="Two each of gray, white, and black shirts laying flat."
			class="h-full w-full object-cover object-center"
		/>
	</div>
	<div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
		<div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
			<img
				src="/images/001.jpg"
				alt="Model wearing plain black basic tee."
				class="h-full w-full object-cover object-center"
			/>
		</div>
		<div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
			<img
				src="/images/003.jpg"
				alt="Model wearing plain gray basic tee."
				class="h-full w-full object-cover object-center"
			/>
		</div>
	</div>
	<div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
		<img
			src="/images/004.jpg"
			alt="Model wearing plain white basic tee."
			class="h-full w-full object-cover object-center"
		/>
	</div>
</div>

<!-- Product info -->
<div
	class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24"
>
	<div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
		<h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
	</div>

	<!-- Options -->
	<div class="mt-4 lg:row-span-3 lg:mt-0">
		<h2 class="sr-only">Product information</h2>
		<p class="text-3xl tracking-tight text-gray-900">$192</p>

		<!-- Reviews -->
		<div class="mt-6">
			<h3 class="sr-only">Reviews</h3>
			<div class="flex items-center">
				<div class="flex items-center">
					<!--
				  Heroicon name: mini/star
  
				  Active: "text-gray-900", Default: "text-gray-200"
				-->
					<svg
						class="text-gray-900 h-5 w-5 flex-shrink-0"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
							clip-rule="evenodd"
						/>
					</svg>

					<!-- Heroicon name: mini/star -->
					<svg
						class="text-gray-900 h-5 w-5 flex-shrink-0"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
							clip-rule="evenodd"
						/>
					</svg>

					<!-- Heroicon name: mini/star -->
					<svg
						class="text-gray-900 h-5 w-5 flex-shrink-0"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
							clip-rule="evenodd"
						/>
					</svg>

					<!-- Heroicon name: mini/star -->
					<svg
						class="text-gray-900 h-5 w-5 flex-shrink-0"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
							clip-rule="evenodd"
						/>
					</svg>

					<!-- Heroicon name: mini/star -->
					<svg
						class="text-gray-200 h-5 w-5 flex-shrink-0"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<p class="sr-only">4 out of 5 stars</p>
				<a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
					>117 reviews</a
				>
			</div>
		</div>

		<form class="mt-10">
			<button
				type="submit"
				class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>Add to bag</button
			>
		</form>
	</div>

	<div
		class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8"
	>
		<!-- Description and details -->
		<div>
			<h3 class="sr-only">Description</h3>

			<div class="space-y-6">
				<p class="text-base text-gray-900">
					{data.short_description}
				</p>
			</div>
		</div>

		<div class="mt-10">
			<h3 class="text-sm font-medium text-gray-900">Highlights</h3>

			<div class="mt-4">
				<pre class="text-sm text-gray-600">
					{'\n'}
					{JSON.stringify(JSON.parse(data.data_for_curious || '[]'), null, 2)}
				</pre>
			</div>
		</div>

		<div class="mt-10">
			<h2 class="text-sm font-medium text-gray-900">Detalles</h2>

			<div class="mt-4 space-y-6">
				<p class="text-sm text-gray-600 whitespace-pre-wrap">
					{data.long_description}
				</p>
			</div>
		</div>
	</div>
</div>
