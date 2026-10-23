const categoryPhotos: Record<string, string> = {
	Beef: '/images/categories/beef_bg.jpg',
	Chicken: '/images/categories/chicken_bg.jpg',
    Pork: '/images/categories/pork_bg.jpg',
    Seafood: '/images/categories/seafood_bg.jpg',
    Dessert: '/images/categories/desserts_bg.jpg',
    Lamb: '/images/categories/lamb_bg.jpg',
    Side: '/images/categories/side_bg.jpg',
    Starter: '/images/categories/starter_bg.jpg',
    Pasta: '/images/categories/pasta_bg.jpg',
    Goat: '/images/categories/goat_bg.jpg',
    Vegan: '/images/categories/vegan_bg.jpg',
    Vegetarian: '/images/categories/vegetarian_bg.jpg',
    Miscellaneous: '/images/categories/miscellaneous_bg.jpg',
    Breakfast: '/images/categories/breakfast_bg.jpg'
};

const defaultPhoto = '/images/bg-new.jpg';

export function getCategoryPhoto(name: string): string {
	return categoryPhotos[name] ?? defaultPhoto;
}