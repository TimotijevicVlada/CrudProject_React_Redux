import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>Welcome to our website</div>
      <Link to="/" className='auth'>Login/Signup</Link>
    </header>
  )
};

export default Header;
