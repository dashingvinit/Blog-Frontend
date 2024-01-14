import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        <Link to="/" style={styles.navbarLogo}>
          Brogrammers
        </Link>

        <div
          style={{ ...styles.menuIcon, ...(isOpen && styles.menuIconOpen) }}
          onClick={toggleNavbar}
        >
          <i className="fas fa-bars"></i>
        </div>

        <ul style={{ ...styles.navMenu, ...(isOpen && styles.navMenuOpen) }}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.navLinks} onClick={toggleNavbar}>
              Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/categories" style={styles.navLinks} onClick={toggleNavbar}>
              Categories
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" style={styles.navLinks} onClick={toggleNavbar}>
              About
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/contact" style={styles.navLinks} onClick={toggleNavbar}>
              Contact
            </Link>
          </li>
          <li style={styles.navItem}>
            <button style={styles.loginButton}>Login</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarLogo: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  menuIcon: {
    cursor: 'pointer',
    display: 'none',
    color: '#fff',
    fontSize: '1.5rem',
  },
  menuIconOpen: {
    display: 'block',
  },
  navMenu: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  navMenuOpen: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '70px',
    left: 0,
    width: '100%',
    backgroundColor: '#333',
    padding: '10px 0',
    textAlign: 'center',
  },
  navItem: {
    margin: '0 20px',
  },
  navLinks: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1rem',
    transition: 'color 0.3s',
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default Navbar;

