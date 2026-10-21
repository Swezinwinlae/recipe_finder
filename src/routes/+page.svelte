<script lang="ts">
    import ChevronWithCircleLeftIcon from '~icons/entypo/chevron-with-circle-left';
    import ChevronWithCircleRightIcon from '~icons/entypo/chevron-with-circle-right';
    import { getMealsByCategory, getCategories} from "#lib/api/mealsapi.ts";
    import CategoryCard from '#lib/components/CategoryCard.svelte';

    const fakeCategory = {
		idCategory: '1',
		strCategory: 'Beef',
		strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
		strCategoryDescription: 'Beef is the culinary name for meat from cattle.'
	};

</script>

<section class="relative h-[70vh] bg-ink">

	<div
		class="absolute inset-0 bg-[url(/images/bg-new.jpg)] bg-cover bg-no-repeat opacity-90"
	></div>

	<div class="relative flex h-full items-end justify-end px-6 pb-15 md:px-16">
		<div class="w-full max-w-xl">
            <h1 class="font-logo text-4xl leading-tight text-balance text-primary md:text-5xl">
                Find your next favourite meal, one recipe at a time
            </h1>
            <p class="mt-4 text-lg text-light font-semibold">
                Search recipes by name, category, or ingredient.
            </p>
        </div>
	</div>

	<div class="absolute inset-x-0 bottom-0 z-10 translate-y-1/2 px-6 md:px-16">
		<input
			type="text"
			placeholder="Search for a recipe..."
			class="ml-auto block w-full max-w-xl rounded-full bg-primary px-6 py-4 shadow-lg placeholder:text-light"
		/>
	</div>
</section>

<section class="bg-gray-50 px-6 py-16">
    <h2 class="text-center font-logo text-primary text-5xl">Categories</h2>
    <p class="mt-2 text-center text-ink/70">Pick a category to see its meals</p>

    <div class="relative mx-auto mt-10 max-w-4xl">
        <CategoryCard category={fakeCategory} class="flex items-center gap-8 rounded-3xl bg-white p-8 shadow-md"/>
        <button class="absolute top-1/2 -left-5 -translate-y-1/2">
            <ChevronWithCircleLeftIcon class="w-12 h-12"/>
        </button>
        
        <button class="absolute top-1/2 -right-5 -translate-y-1/2">
            <ChevronWithCircleRightIcon class="w-12 h-12"/>
        </button>
    </div>
</section>

<!-- FAVOURITES -->
<section class="px-6 py-12">
	<h2>Your favourites</h2>
	...
</section>