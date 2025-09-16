import useRecipeStore from '../store/recipeStore'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)

  if (recipes.length === 0) {
    return <p>No recipes added yet. Add one above!</p>
  }

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} style={{ marginBottom: '10px' }}>
            <strong>{recipe.title}</strong>: {recipe.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecipeList
