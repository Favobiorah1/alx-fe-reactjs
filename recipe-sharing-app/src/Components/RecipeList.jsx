import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const { filteredRecipes, recipes, filterRecipes } = useRecipeStore();

  // initialize with all recipes
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {filteredRecipes.map(recipe => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>Ingredients: {recipe.ingredients.join(', ')}</p>
              <p>Prep Time: {recipe.prepTime} mins</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
