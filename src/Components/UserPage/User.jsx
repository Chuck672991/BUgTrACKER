import React, { useState } from 'react';
import './User.css';


const User = () => {
  const [modal, setModal] = useState(null);
  const [userDetails, setUserDetails] = useState({ name: '', email: '', id: '' });
  const [users, setUsers] = useState([]); // Array to store users

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    setModal(null);
    setUserDetails({ name: '', email: '', id: '' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (modal === 'Add User') {
      const newUser = {
        id: users.length + 1, // Generate a simple ID for demo purposes
        name: userDetails.name,
        email: userDetails.email,
      };
      setUsers([...users, newUser]); // Add new user to the users array
    } else if (modal === 'Delete User') {
      const userId = parseInt(userDetails.id);
      if (!isNaN(userId)) {
        setUsers(users.filter((user) => user.id !== userId));
      }
    } else if (modal === 'Update User') {
      const userId = parseInt(userDetails.id);
      if (!isNaN(userId)) {
        setUsers(users.map((user) => 
          user.id === userId 
            ? { ...user, name: userDetails.name, email: userDetails.email } 
            : user
        ));
      }
    }

    handleCloseModal();
  };

  return (
    <div className="user-page">
      <h1 className="user-page-title">User Management</h1>
      
      <div className="user-actions">
        <button className="user-action-button" onClick={() => setModal('Add User')}>Add User</button>
        <button className="user-action-button" onClick={() => setModal('Delete User')}>Delete User</button>
        <button className="user-action-button" onClick={() => setModal('Update User')}>Update User</button>
      </div>

      {/* Display User List */}
      <div className="user-list">
        <h2>Existing Users</h2>
        {users.length === 0 ? (
          <p>No users available</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id} className="user-item">
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Conditional Rendering of Modals */}
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{modal}</h2>
            <form onSubmit={handleFormSubmit}>
              {(modal === 'Add User' || modal === 'Update User') && (
                <>
                  {modal === 'Update User' && (
                    <>
                      <label>User ID:</label>
                      <input
                        type="text"
                        name="id"
                        value={userDetails.id}
                        onChange={handleInputChange}
                        required
                      />
                    </>
                  )}
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={userDetails.name}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                    required
                  />
                </>
              )}
              {modal === 'Delete User' && (
                <>
                  <label>User ID:</label>
                  <input
                    type="text"
                    name="id"
                    value={userDetails.id}
                    onChange={handleInputChange}
                    required
                  />
                </>
              )}
              <div className="modal-buttons">
                <button type="submit" className="modal-submit-button">Submit</button>
                <button type="button" className="modal-close-button" onClick={handleCloseModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};


export default User;
