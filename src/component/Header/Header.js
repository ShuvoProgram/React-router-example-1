import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/Product'>Product</NavLink>
                <NavLink to='/friend'>Friend</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
        </div>
    );
};

export default Header;