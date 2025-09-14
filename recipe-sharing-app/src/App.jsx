// src/App.jsx
import React, { useState } from "react";
import useRecipeStore from "./components/recipeStore";

function App() {
  // get data + actions from the store
  const { recipes, addRecipe, updateRecipe, deleteRecipe } = useRecipeStore();

  // local state for new recipe input
  const [newRecipe, setNewRecipe] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🍲 Recipe App</h1>

      {/* Input to add recipe */}
      <input
        type="text"
        placeholder="Enter recipe name"
        value={newRecipe}
        onChange={(e) => setNewRecipe(e.target.value)}
      />
      <button
        onClick={() => {
          if (newRecipe.trim()) {
            addRecipe({ id: Date.now(), name: newRecipe });
            setNewRecipe("");
          }
        }}
      >
        Add Recipe
      </button>

      {/* Recipe list */}
      <ul>
        {recipes.map((r) => (
          <li key={r.id}>
            {r.name}{" "}
            <button
              onClick={() => updateRecipe(r.id, { name: r.name + " ✅" })}
            >
              Update
            </button>
            <button onClick={() => deleteRecipe(r.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
