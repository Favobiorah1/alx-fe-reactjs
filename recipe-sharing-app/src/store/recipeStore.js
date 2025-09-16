import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: 'Jollof Rice', ingredients: ['rice', 'tomato', 'pepper'], prepTime: 45 },
    { id: 2, title: 'Egusi Soup', ingredients: ['melon seed', 'spinach', 'meat'], prepTime: 60 },
    { id: 3, title: 'Fried Plantain', ingredients: ['plantain', 'oil', 'salt'], prepTime: 15 },
  ],

  searchTerm: '',
  ingredientFilter: '',
  maxPrepTime: null,
  filteredRecipes: [],

  // actions
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  setIngredientFilter: (ingredient) => {
    set({ ingredientFilter: ingredient });
    get().filterRecipes();
  },
  setMaxPrepTime: (time) => {
    set({ maxPrepTime: time });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm, ingredientFilter, maxPrepTime } = get();
    const filtered = recipes.filter(recipe => {
      const matchesSearch =
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesIngredient =
        !ingredientFilter ||
        recipe.ingredients.some(ing =>
          ing.toLowerCase().includes(ingredientFilter.toLowerCase())
        );

      const matchesPrepTime =
        !maxPrepTime || recipe.prepTime <= maxPrepTime;

      return matchesSearch && matchesIngredient && matchesPrepTime;
    });

    set({ filteredRecipes: filtered });
  },
}));
