import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/Navbar.css';
import ultraball from '../assets/static/ultraball.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className=' text-decoration-none'>
        <h1 className='navbar-title'>React-dex</h1>
      </Link>
      <img src={ultraball} alt='pokeball' />
    </div>
  );
};

export default Navbar;
