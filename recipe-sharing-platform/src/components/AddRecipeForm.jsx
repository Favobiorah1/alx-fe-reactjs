import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("⚠️ Please fill in all fields before submitting.");
      setSuccess(false);
      return;
    }

    // Optional: check if ingredients include at least two items
    const ingredientsList = ingredients.split(",").map((item) => item.trim());
    if (ingredientsList.length < 2) {
      setError("⚠️ Please include at least two ingredients separated by commas.");
      setSuccess(false);
      return;
    }

    // Simulate submitting
    const newRecipe = {
      title,
      ingredients: ingredientsList,
      steps,
    };

    console.log("Recipe submitted:", newRecipe);

    setError("");
    setSuccess(true);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Add a New Recipe
        </h1>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        {success && (
          <p className="text-green-600 text-sm mb-3">
            ✅ Recipe submitted successfully!
          </p>
        )}

        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients (separate with commas)
          </label>
          <textarea
            placeholder="e.g. flour, eggs, sugar"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="3"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Preparation Steps */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            placeholder="Describe the preparation steps..."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
