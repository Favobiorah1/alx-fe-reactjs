import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  if (!recipes || recipes.length === 0) {
    return <p>No recipes yet — add one above!</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ borderBottom: '1px solid #ddd', padding: '0.5rem 0' }}>
          <h3 style={{ margin: 0 }}>{recipe.title}</h3>
          <p style={{ margin: '0.25rem 0' }}>
            {recipe.description.length > 120
              ? recipe.description.slice(0, 120) + '...'
              : recipe.description}
          </p>
          <Link to={`/recipes/${recipe.id}`} style={{ marginRight: '0.5rem' }}>
            View
          </Link>
          <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: '0.5rem' }}>
            Edit
          </Link>
          <DeleteRecipeButton id={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
