import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

/**
 * Advanced GitHub user search
 * @param {string} username - GitHub username (optional)
 * @param {string} location - User location (optional)
 * @param {number} minRepos - Minimum repositories (optional)
 */
export const fetchAdvancedUserData = async (username, location, minRepos) => {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};
