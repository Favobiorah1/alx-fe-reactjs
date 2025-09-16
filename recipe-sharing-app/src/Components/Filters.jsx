import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const Filters = () => {
  const setIngredientFilter = useRecipeStore(state => state.setIngredientFilter);
  const setMaxPrepTime = useRecipeStore(state => state.setMaxPrepTime);

  return (
    <div style={{ marginBottom: '15px' }}>
      <input
        type="text"
        placeholder="Filter by ingredient..."
        onChange={(e) => setIngredientFilter(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <input
        type="number"
        placeholder="Max prep time (mins)"
        onChange={(e) => setMaxPrepTime(Number(e.target.value))}
        style={{ padding: '8px' }}
      />
    </div>
  );
};

export default Filters;
