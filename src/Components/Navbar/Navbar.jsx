import React from 'react'
import '../BugPage/BugTracker.css';

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="logo">
      <img src="https://cdn-icons-png.freepik.com/512/8686/8686102.png" alt="Logo" />
      <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Bug Tracker</a>
    </div>
    <div className="menu">
      <a href="/">Dashboard</a>
      <a href="/tracking">Create Bug</a>
      <a href="#">Bug List</a>
      <a href="#">Reports</a>
      <a href="#">Settings</a>
    </div>
    <div className="perfil">
      <div className="contenido-perfil">
        <p>USER</p>
        <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="User" />
      </div>
      <div className="desplegable">
        <a href="#">Profile</a>
        <a href="#">Settings</a>
        <a href="#">Help</a>
        <a href="#">Logout</a>
      </div>
    </div>
  </div>
  )
}

export default Navbar