import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2>
        <Link to={'/'}>Blog</Link>
      </h2>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/new'} className={styles.newBtn}>New Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
