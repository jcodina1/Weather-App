import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx'
import './Nav.css';


import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Weather App
        </span>
      </Link>
      <Link to='/about'>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <span className="nav-link active">About</span>
        </li></ul>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};
export default Nav;
