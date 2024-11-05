import React, { useState } from 'react';
import './BugTracker.css';
import Navbar from '../Navbar/Navbar';

function BugTracker() {
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: 'Error in login functionality',
      severity: 'High',
      status: 'Open',
      assignedTo: 'Alice',
      createdAt: '2024-05-31',
      updatedAt: '2024-06-03',
    },
    {
      id: 2,
      title: 'UI glitch on dashboard',
      severity: 'Low',
      status: 'In Progress',
      assignedTo: 'Bob',
      createdAt: '2024-03-11',
      updatedAt: '2024-05-19',
    },
  ]);

  return (
    <div>
      {/* Navbar */}
      {/* <div className="navbar">
        <div className="logo">
          <img src="https://cdn-icons-png.freepik.com/512/8686/8686102.png" alt="Logo" />
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Bug Tracker</a>
        </div>
        <div className="menu">
          <a href="#">Dashboard</a>
          <a href="#">Create Bug</a>
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
      </div> */}
      <Navbar/>

      {/* Main Content */}
      <div className="contenedor contenido-principal">
        {/* Header and Add New Bug Button */}
        <div className="usuarios-barra">
          <h2>Bugs</h2>
          <button id="nuevoBug">
            <i className="fas fa-plus"></i> Add New Bug
          </button>
        </div>

        {/* Search Bar */}
        <div className="busqueda-barra">
          <input type="search" placeholder="Search by Bug Title" />
          <button disabled>Search</button>
        </div>

        {/* Bug Table */}
        <table>
          <thead>
            <tr>
              <th>Bug Title</th>
              <th>Severity</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th>Created Date</th>
              <th>Updated Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bugs.map((bug) => (
              <tr key={bug.id}>
                <td>{bug.title}</td>
                <td>{bug.severity}</td>
                <td>{bug.status}</td>
                <td>{bug.assignedTo}</td>
                <td>{bug.createdAt}</td>
                <td>{bug.updatedAt}</td>
                <td className="acciones">
                  <button className="botonEditar">Edit</button>
                  <button className="botonEliminar">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination and Summary */}
        <div id="resumenTabla">
          <p>Previous Page: <b>0</b></p>
          <p>Next Page: <b>2</b></p>
          <p>Total Records: <b>{bugs.length}</b></p>
          <p>Initial Record: <b>1</b></p>
          <p>Final Record: <b>{bugs.length}</b></p>
          <p>Page Size: <b>2</b></p>
        </div>
        <div className="paginacion">
          <button id="paginaAnterior"><i className="fas fa-arrow-left"></i></button>
          <div id="contador">Current Page: 1</div>
          <button id="paginaSiguiente"><i className="fas fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  );
}

export default BugTracker;
