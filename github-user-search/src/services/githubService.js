// src/services/githubService.js

const GITHUB_API = "https://api.github.com/users";

// 🔍 Search for users by query
export async function searchUsers(query) {
  const response = await fetch(`https://api.github.com/search/users?q=${query}`);
  if (!response.ok) throw new Error("Failed to search users");
  return response.json();
}

// 👤 Get details of a single user
export async function getUser(username) {
  const response = await fetch(`${GITHUB_API}/${username}`);
  if (!response.ok) throw new Error("Failed to fetch user");
  return response.json();
}
