// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const filterRecipes = useRecipeStore((s) => s.filterRecipes);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!window.confirm('Delete this recipe?')) return;
    deleteRecipe(id);
    filterRecipes(); // keep filtered state in sync
    navigate('/'); // go home after deletion
  };

  return (
    <button onClick={handleDelete} style={{ padding: '6px 10px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: 4 }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
