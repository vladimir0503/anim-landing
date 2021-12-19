import React from 'react';
import { NavLink } from 'react-router-dom';
import { page } from '../../router';

import Logo from '../Logo/Logo';

import './Header.scss';

const Header = () => {
    const { home, features, signUp } = page;

    return (
        <header className='Header'>
            <nav className='Header__nav'>
                <Logo className='Header__logo' />
                <ul className='Header__mainNav'>
                    <li className='Header__navItem'><NavLink to={home} className='Header__navLink' activeStyle='active' >Home</NavLink></li>
                    <li className='Header__navItem'><NavLink to={features} className='Header__navLink' activeStyle='active' >Features</NavLink></li>
                </ul>
                <ul className='Header__secondaryNav'>
                    <li className='Header__navItem'><NavLink to={signUp} className='Header__navLink' activeStyle='active' >Sign up</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;