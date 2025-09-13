import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🍳 Recipe Store (Zustand)</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        <Route path="*" element={<div style={{ padding: '2rem' }}>Not found. <Link to="/">Go home</Link></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
