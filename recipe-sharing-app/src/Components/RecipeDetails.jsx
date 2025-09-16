// src/components/RecipeDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <div><strong>Ingredients:</strong></div>
      <ul>
        {recipe.ingredients.map((it, idx) => <li key={idx}>{it}</li>)}
      </ul>

      <div><strong>Prep time:</strong> {recipe.prepTime} mins</div>

      <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
        <Link to={`/recipes/${recipe.id}/edit`} style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 4 }}>Edit</Link>
        <DeleteRecipeButton id={recipe.id} />
        <Link to="/" style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 4, textDecoration: 'none' }}>Back</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
