import axios from "axios";

/**
 * Advanced GitHub user search
 * @param {Object} options
 * @param {string} options.query - main keyword (username or general search)
 * @param {string} [options.location] - optional location filter
 * @param {number} [options.minRepos] - optional minimum public repositories
 */
export const searchUsers = async ({ query, location = "", minRepos = 0 }) => {
  try {
    // Build GitHub Search API query
    let searchQuery = query || "";

    if (location) {
      searchQuery += ` location:${location}`;
    }

    if (minRepos > 0) {
      // ✅ include repos filter for minimum repo count
      searchQuery += ` repos:>=${minRepos}`;
    }

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
        },
      }
    );

    return response.data; // returns { total_count, items: [...] }
  } catch (error) {
    throw new Error("GitHub user search failed");
  }
};
