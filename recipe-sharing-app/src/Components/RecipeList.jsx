import useRecipeStore from '../store/recipeStore'

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes)

  if (filteredRecipes.length === 0) {
    return <p>No recipes found. Try adding one or adjust your search.</p>
  }

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id} style={{ marginBottom: '10px' }}>
            <strong>{recipe.title}</strong>: {recipe.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecipeList
