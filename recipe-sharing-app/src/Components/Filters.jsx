// src/components/Filters.jsx
import React from 'react';
import useRecipeStore from '../store/recipeStore';

const Filters = () => {
  const ingredientFilter = useRecipeStore((s) => s.ingredientFilter);
  const maxPrepTime = useRecipeStore((s) => s.maxPrepTime);
  const setIngredientFilter = useRecipeStore((s) => s.setIngredientFilter);
  const setMaxPrepTime = useRecipeStore((s) => s.setMaxPrepTime);

  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
      <input
        type="text"
        placeholder="Filter by ingredient..."
        value={ingredientFilter}
        onChange={(e) => setIngredientFilter(e.target.value)}
        style={{ padding: 8, flex: 1 }}
      />
      <input
        type="number"
        placeholder="Max prep time (mins)"
        value={maxPrepTime ?? ''}
        onChange={(e) => setMaxPrepTime(e.target.value)}
        style={{ padding: 8, width: 180 }}
        min="0"
      />
    </div>
  );
};

export default Filters;
