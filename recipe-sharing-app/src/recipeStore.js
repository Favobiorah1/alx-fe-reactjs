import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  // add a recipe (newRecipe should include an `id`)
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  // delete by id
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),
  // update by id; updatedFields is an object with fields to merge
  updateRecipe: (id, updatedFields) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedFields } : r
      ),
    })),
  // optional: set whole list
  setRecipes: (recipes) => set({ recipes }),
}));
