export const fetchGitHubUser = async (username) => {
  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY

  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: apiKey ? `Bearer ${apiKey}` : undefined,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub user')
  }

  return response.json()
}
