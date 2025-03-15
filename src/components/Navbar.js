// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Medicus</h1>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/prescription">Prescription</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
