// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from './recipeStore. js';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return <button onClick={() => deleteRecipe(recipeId)}>Delete</button>;
};

export default DeleteRecipeButton;
