<script lang="ts">
	import type { Category } from '#lib/types/meal.ts';
	import { getCategoryPhoto } from '#lib/data/categoryPhoto.ts';

	let { category }: { category: Category } = $props();

	const photo = $derived(getCategoryPhoto(category.strCategory));
</script>

<div class="relative h-112 w-full overflow-hidden rounded-3xl shadow-md md:h-136">
	<!-- Layer 1: photo -->
	<div
		class="absolute inset-0 bg-cover bg-center"
		style="background-image: url({photo})"
		aria-hidden="true"
	></div>

	<!-- Layer 2: dark shade -->
	<div class="absolute inset-0 bg-black/50"></div>

	<div class="relative flex h-full flex-col justify-end px-20 pb-10">
		<h3 class="font-logo text-4xl text-white md:text-6xl">
			Category : <span class="text-primary">{category.strCategory}</span>
		</h3>
		<p class="mt-4 line-clamp-3 max-w-3xl text-lg font-semibold text-white">
			{category.strCategoryDescription}
		</p>
	</div>
</div>