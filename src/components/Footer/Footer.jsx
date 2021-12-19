import React from 'react';
import Logo from '../Logo/Logo';
import { useMatch } from 'react-router-dom';
import { page } from '../../router';

import './Footer.scss';

const Footer = () => {
    const match = useMatch(page.signUp);

    if (match) return null;

    return (
        <footer className='Footer'>
            <Logo className='Footer_logo' />
        </footer>
    );
};

export default Footer;