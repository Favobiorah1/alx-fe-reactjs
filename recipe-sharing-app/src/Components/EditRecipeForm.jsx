// src/components/EditRecipeForm.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const navigate = useNavigate();

  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const filterRecipes = useRecipeStore((s) => s.filterRecipes);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [prepTime, setPrepTime] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
      setIngredients(recipe.ingredients.join(', '));
      setPrepTime(String(recipe.prepTime));
    }
  }, [recipe]);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = {
      id: recipeId,
      title: title.trim(),
      description: description.trim(),
      ingredients: ingredients.split(',').map((s) => s.trim()).filter(Boolean),
      prepTime: Number(prepTime) || 0,
    };

    updateRecipe(updated);
    filterRecipes();
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: 8 }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" style={{ width: '100%', padding: 8 }} />
      </div>
      <div style={{ marginBottom: 8 }}>
        <input value={prepTime} onChange={(e) => setPrepTime(e.target.value)} placeholder="Prep time (mins)" type="number" style={{ width: '100%', padding: 8 }} />
      </div>
      <div style={{ marginBottom: 8 }}>
        <input value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients (comma separated)" style={{ width: '100%', padding: 8 }} />
      </div>
      <div style={{ marginBottom: 8 }}>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" rows={4} style={{ width: '100%', padding: 8 }} />
      </div>
      <button type="submit" style={{ padding: '8px 12px' }}>Save</button>
      <button type="button" onClick={() => navigate(-1)} style={{ marginLeft: 8, padding: '8px 12px' }}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;
