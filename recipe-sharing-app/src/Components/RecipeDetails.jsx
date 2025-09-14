// src/components/RecipeDetails.jsx
import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  const [editing, setEditing] = useState(false);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {editing ? (
        <EditRecipeForm recipe={recipe} setEditingId={() => setEditing(false)} />
      ) : (
        <>
          <button onClick={() => setEditing(true)}>Edit</button>
          <DeleteRecipeButton recipeId={recipe.id} />
        </>
      )}

      <div>
        <Link to="/">⬅ Back to Home</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
