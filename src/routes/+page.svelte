<script lang="ts">
    import { getMealsByCategory, getCategories} from "#lib/api/mealsapi.ts";

</script>

<!-- <div class="relative min-h-screen bg-">

    <div class="absolute inset-0 bg-[url(/images/bg_white.png)] bg-cover bg-no-repeat"></div>

    <input type="text" placeholder="Search a recipe..." class="py-2 px-4 bg-white shadow rounded-3xl">

</div> -->

<section class="relative h-[70vh] bg-gray-200">

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
			type="search"
			placeholder="Search for a recipe..."
			class="ml-auto block w-full max-w-xl rounded-full bg-white px-6 py-4 shadow-lg"
		/>
	</div>
</section>

<section class="bg-gray-100 px-6 pt-20 pb-12">
	<h2>Categories</h2>
	...
</section>

<!-- FAVOURITES -->
<section class="px-6 py-12">
	<h2>Your favourites</h2>
	...
</section>