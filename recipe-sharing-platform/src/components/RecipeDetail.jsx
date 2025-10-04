import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setRecipe(found);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        Loading recipe details...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold text-blue-800 mb-4">
          {recipe.title}
        </h1>

        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        <div className="border-t border-gray-200 pt-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Ingredients
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {recipe.ingredients?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-4 mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Instructions
          </h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            {recipe.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <Link
          to="/"
          className="mt-8 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;
