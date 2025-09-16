import React from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import RecipeList from './RecipeList';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <Filters />
      <RecipeList />
    </div>
  );
}

export default App;
