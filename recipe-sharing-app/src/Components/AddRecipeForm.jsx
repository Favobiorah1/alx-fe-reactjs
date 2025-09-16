// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import useRecipeStore from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const filterRecipes = useRecipeStore((s) => s.filterRecipes);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState(''); // comma separated
  const [prepTime, setPrepTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const recipe = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      ingredients: ingredients
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      prepTime: Number(prepTime) || 0,
    };

    addRecipe(recipe);
    // refresh filtered list
    filterRecipes();

    // reset
    setTitle('');
    setDescription('');
    setIngredients('');
    setPrepTime('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe title"
          style={{ flex: 1, padding: 8 }}
        />
        <input
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
          placeholder="Prep time (mins)"
          type="number"
          style={{ width: 140, padding: 8 }}
          min="0"
        />
      </div>

      <input
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (comma separated)"
        style={{ width: '100%', padding: 8, marginBottom: 8 }}
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Short description"
        rows={2}
        style={{ width: '100%', padding: 8, marginBottom: 8 }}
      />

      <button type="submit" style={{ padding: '8px 12px' }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
