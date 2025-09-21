import axios from "axios";

// Search GitHub users by a query (username, location, etc.)
export const searchUsers = async (query) => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
        },
      }
    );
    return response.data; // contains { total_count, items: [...] }
  } catch (error) {
    throw new Error("User search failed");
  }
};
