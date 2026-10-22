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

    function perviousCategory(){
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

<section class="p-4 bg-light flex justify-between items-center">
    <div class="ml-8">
        <h2 class="text-center font-logo text-primary text-6xl">Categories</h2>
        <p class="mt-2 text-center text-ink font-semibold">Pick a category to see its meals</p>
    </div>
    
    <div class="relative mr-8 mx-auto  w-full max-w-4xl flex-1">
        {#if isLoading}
            <p>Loading...</p>
        {:else if errorMessage}
            <p>{errorMessage}</p>
        {:else}
            <CategoryCard category={categoryList[index]} />
            <button onclick={perviousCategory} class="absolute top-1/2 -left-5 -translate-y-1/2">
                <ChevronWithCircleLeftIcon class="w-12 h-12 text-ink hover:text-primary hover:scale-110"/> 
            </button>
            
            <button onclick={nextCategory} class="absolute top-1/2 -right-5 -translate-y-1/2">
                <ChevronWithCircleRightIcon class="w-12 h-12 text-ink hover:text-primary hover:scale-110"/>
            </button>
        {/if}
    </div>
</section>

<!-- FAVOURITES -->
<section class="px-6 py-12">
	<h2>Your favourites</h2>
	...
</section>