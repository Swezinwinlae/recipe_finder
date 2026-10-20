import type { Category, CategoryResponse, MealDetail, MealDetailResponse, MealSummary, MealSummaryResponse } from "#lib/types/meal.ts";
import { normalizeModuleId } from "vite/module-runner";

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export async function getMealsByCategory(category : string): Promise<MealSummary[]>{

    const res = await fetch(`${BASE_URL}/filter.php?c=${category}`);

    if (!res.ok) {
		throw new Error('Failed to load meals');
	}

	const data: MealSummaryResponse = await res.json();

	return data.meals ?? [];
}

export async function searchMeals(name : string): Promise<MealDetail[]>{

    const res = await fetch(`${BASE_URL}/search.php?s=${name}`);

    if (!res.ok){
        throw new Error('failed to load meals');
    }
    const data: MealDetailResponse = await res.json();

    return data.meals ?? [];
}

export async function getMealById(id : string): Promise<MealDetail | null>{

    const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);

    if (!res.ok){
        throw new Error('failed to load meals');
    }
    const data: MealDetailResponse = await res.json();

    return data.meals?.[0] ?? null;
}

export async function getCategories(): Promise<Category []>{
    const res = await fetch(`${BASE_URL}/categories.php`);

    if (!res.ok){
        throw new Error('failed to load meals');
    }
    const data: CategoryResponse = await res.json();

    return data.categories ?? [];

}