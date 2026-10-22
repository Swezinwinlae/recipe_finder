<script lang="ts">
    import type {Category} from '#lib/types/meal.ts';

    let {category} : {category : Category} = $props();
</script>

<div class="flex h-72 w-full items-center gap-8 rounded-3xl bg-white p-8 shadow-md">
    <img 
        src={category.strCategoryThumb} 
        alt={category.strCategory}
        class="h-48 w-48 shrink-0 object-contain"
    />
    <div>
        <h3 class="font-logo text-primary text-3xl">{category.strCategory}</h3>
        <p class="mt-4 text-lg text-ink font-semibold line-clamp-4">{category.strCategoryDescription}</p>
    </div>
</div>