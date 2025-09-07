import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserProfile = ({ onLogout }) => {
  const { user, updateUser } = useContext(UserContext);

  const handleInputChange = (field, value) => {
    updateUser({
      ...user,
      [field]: value
    });
  };

  const handleSaveChanges = () => {
    // Additional save logic can be added here if needed
    console.log('Saving user changes:', user);
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <h2>User Profile</h2>
        <button onClick={onLogout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="profile-content">
        <div className="avatar-section">
          <img 
            src={user?.avatar || '/default-avatar.png'} 
            alt="User Avatar" 
            className="user-avatar"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                  handleInputChange('avatar', event.target.result);
                };
                reader.readAsDataURL(file);
              }
            }}
          />
        </div>

        <div className="user-details">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={user?.name || ''}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={user?.email || ''}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Bio:</label>
            <textarea
              value={user?.bio || ''}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              className="form-textarea"
              rows="4"
            />
          </div>

          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              value={user?.phone || ''}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="form-input"
            />
          </div>
        </div>
      </div>

      <div className="profile-actions">
        <button onClick={handleSaveChanges} className="save-btn">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UserProfile;