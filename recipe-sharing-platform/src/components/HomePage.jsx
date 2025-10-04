import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-3">
          🍽️ Recipe Sharing Platform
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Explore, share, and create your favorite recipes
        </p>

        <Link
          to="/add-recipe"
          className="inline-block bg-blue-600 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          ➕ Add New Recipe
        </Link>
      </header>

      {/* Recipe Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{recipe.summary}</p>

              <Link
                to={`/recipe/${recipe.id}`}
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                View Recipe →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {recipes.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No recipes found. Try adding a new one!
        </p>
      )}
    </div>
  );
}

export default HomePage;
