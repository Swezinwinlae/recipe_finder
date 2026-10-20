export type MealSummary = {
	strMeal: string;
	strMealThumb: string;
	idMeal: string;
	strArea: string | null;
	strCountry: string | null;
};

export type MealDetail = {
	idMeal: string;
	strMeal: string;
	strCategory: string;
	strArea: string | null;
	strCountry: string | null;
	strInstructions: string;
	strMealThumb: string;
	strTags: string | null;
	strYoutube: string | null;
	strIngredient1: string | null;
	strMeasure1: string | null;
};

export type Category ={
	idCategory : string;
	strCategory: string;
    strCategoryThumb : string;
    strCategoryDescription: string;
};

export type MealSummaryResponse = {
	meals: MealSummary[] | null;
};

export type MealDetailResponse = {
	meals: MealDetail[] | null;
};

export type CategoryResponse = {
	categories: Category[] | null;
}
