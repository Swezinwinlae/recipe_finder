<script lang="ts">
    import ChevronWithCircleLeftIcon from '~icons/entypo/chevron-with-circle-left';
    import ChevronWithCircleRightIcon from '~icons/entypo/chevron-with-circle-right';
    import { onMount } from 'svelte';
    import type { Category, CategoryResponse, MealDetail, MealDetailResponse, MealSummary, MealSummaryResponse } from "#lib/types/meal.ts";
    import { getMealsByCategory, getCategories} from "#lib/api/mealsapi.ts";
    import CategoryCard from '#lib/components/CategoryCard.svelte';

    let categoryList: Category[] = $state([]);
    let isLoading = $state(true);
    let errorMessage = $state('');

    let index = $state(0);

    async function loadCategories() {
        try {
            categoryList = await getCategories() ;
            console.log(categoryList.length);
            console.log(categoryList);
        } catch (error) {
            errorMessage = "No categories";
        } finally {
            isLoading = false;
        }
    }

    onMount(() => {
        loadCategories();
    });

    function nextCategory(){
         index = index+1;
         if(index === categoryList.length){
            index = 0;
         }
    }

    function previousCategory(){
         index = index-1;
         if(index === -1){
            index = categoryList.length -1;
         }
    }

</script>

<section class="relative h-[70vh] bg-ink">

	<div
		class="absolute inset-0 bg-[url(/images/bg-new.jpg)] bg-cover bg-no-repeat opacity-90">
    </div>

	<div class="relative flex h-full items-end justify-end px-6 pb-16 md:px-16">
		<div class="w-full max-w-xl">
			<h1 class="font-logo text-4xl leading-tight text-balance text-primary md:text-5xl ">
				Find your next favourite meal, one recipe at a time
			</h1>
			<p class="mt-4 text-lg font-semibold text-light">
				Search recipes by name, category, or ingredient.
			</p>

			<input
				type="text"
				aria-label="Search for a recipe"
				placeholder="Search for a recipe..."
				class="mt-6 block w-full rounded-full bg-light px-6 py-4 shadow-lg caret-primary outline-none placeholder:text-ink font-sans"
			/>
		</div>
	</div>
</section>

<section class="bg-light px-6 py-12">
	<h2 class="sr-only">Categories</h2>

	<div class="mx-auto max-w-[1600px]">
		{#if isLoading}
			<p>Loading...</p>
		{:else if errorMessage}
			<p>{errorMessage}</p>
		{:else}
			<div class="flex items-center gap-4">
				<button aria-label="Previous category" onclick={previousCategory} class="shrink-0">
					<ChevronWithCircleLeftIcon
						class="h-8 w-8 text-ink transition hover:scale-110 hover:text-primary md:h-12 md:w-12"
					/>
				</button>

				<div class="min-w-0 flex-1">
					<CategoryCard category={categoryList[index]} />
				</div>

				<button aria-label="Next category" onclick={nextCategory} class="shrink-0">
					<ChevronWithCircleRightIcon
						class="h-8 w-8 text-ink transition hover:scale-110 hover:text-primary md:h-12 md:w-12"
					/>
				</button>
			</div>
		{/if}
	</div>
</section>

<!-- FAVOURITES -->
<section class="px-6 py-12">
	<h2>Your favourites</h2>
	...
</section>