import axios from "axios";

const API_URL = "https://api.github.com/users";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY; // from .env

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/${username}`, {
      headers: {
        Authorization: `token ${API_KEY}`, // token for higher rate limit
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};
