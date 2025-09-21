import axios from "axios";

// Fetch a single GitHub user by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};
