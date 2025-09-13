import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ id, afterDelete }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const ok = window.confirm('Are you sure you want to delete this recipe?');
    if (!ok) return;
    deleteRecipe(id);
    // optional callback
    if (typeof afterDelete === 'function') {
      afterDelete();
    } else {
      // default behavior: send user back to home
      navigate('/');
    }
  };

  return (
    <button onClick={handleDelete} style={{ color: 'white', background: 'crimson', border: 'none', padding: '0.25rem .5rem', cursor: 'pointer' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
