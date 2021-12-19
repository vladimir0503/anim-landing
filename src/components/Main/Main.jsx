import React from 'react';
import { useLocation } from 'react-router-dom';
import RouteAnimation from '../App/RouteAnimation';

import './Main.scss';

const Main = () => {
    const location = useLocation();

    return (
        <main className='Main'>
            <RouteAnimation location={location} />
        </main>
    );
};

export default Main;