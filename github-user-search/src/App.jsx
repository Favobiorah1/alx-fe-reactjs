import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import { fetchGitHubUser } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    try {
      setError(null);
      const userData = await fetchGitHubUser(username);
      setUser(userData);
    } catch (err) {
      setError("User not found or API error");
      setUser(null);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>🔍 GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <UserProfile user={user} />
    </div>
  );
}

export default App;
