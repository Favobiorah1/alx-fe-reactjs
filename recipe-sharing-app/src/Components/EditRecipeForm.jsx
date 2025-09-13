import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div style={{ padding: '1rem' }}>
        <p>Recipe not found.</p>
        <button onClick={() => navigate('/')}>Back to list</button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    updateRecipe(id, { title: title.trim(), description: description.trim() });
    navigate(`/recipes/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '1rem' }}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
      />
      <textarea
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={() => navigate(-1)} style={{ marginLeft: '0.5rem' }}>
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
