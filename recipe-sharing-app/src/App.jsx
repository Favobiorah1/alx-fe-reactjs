import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🍲 Recipe Sharing App</h1>
      <AddRecipeForm />
      <SearchBar />
      <hr style={{ margin: '20px 0' }} />
      <RecipeList />
    </div>
  )
}

export default App
