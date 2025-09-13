import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));

  if (!recipe) {
    return (
      <div style={{ padding: '1rem' }}>
        <p>Recipe not found.</p>
        <button onClick={() => navigate('/')}>Back to list</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: '1rem' }}>
        <Link to={`/recipes/${id}/edit`} style={{ marginRight: '0.5rem' }}>
          <button>Edit</button>
        </Link>
        <DeleteRecipeButton id={id} />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <Link to="/">← Back to recipes</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
