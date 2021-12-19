import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = ({ className = '' }) => {
    return <Link className={`Logo ${className}`} to='/'>Mimini</Link>;
};

export default Logo;