// src/components/UserProfile.jsx

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', borderRadius: '8px', padding: '15px', margin: '10px', backgroundColor: '#fafafa' }}>
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span></p>
      <p style={{ fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
