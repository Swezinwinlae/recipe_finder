<script lang="ts">
    import type {Category} from '#lib/types/meal.ts';

    let {category} : {category : Category} = $props();
</script>

<div class="flex gap-6 items-center">
    <img src={category.strCategoryThumb} alt="#">
    <div>
        <h3 class="font-logo text-primary text-3xl">{category.strCategory}</h3>
        <p class="mt-4 text-lg text-ink font-semibold">{category.strCategoryDescription}</p>
    </div>
</div>