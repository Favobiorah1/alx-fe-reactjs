const UserProfile = ({ user }) => {
  if (!user) return null;

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <img src={user.avatar_url} alt={user.login} width="100" />
      <h2>{user.login}</h2>
      <p>{user.name}</p>
      <p>Followers: {user.followers} | Following: {user.following}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">View Profile</a>
    </div>
  );
};

export default UserProfile;
