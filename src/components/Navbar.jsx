import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'; // CSS for Navbar

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-brand" href="/">{props.title}</a>
        <div className="navbar-links">
          <a className="nav-link" href="/">Home</a>
          <a className="nav-link" href="/">About</a>
        </div>
       
        <form className="navbar-search">
          <input
            className="search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn search-btn" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};
