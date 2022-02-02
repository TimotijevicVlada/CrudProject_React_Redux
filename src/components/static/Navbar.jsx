import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link className='link' to="/table">Table</Link>
            <Link className='link' to="/galery">Galery</Link>
            <Link className='link' to="/todo">ToDo List</Link>
        </nav>
    )
};

export default Navbar;
