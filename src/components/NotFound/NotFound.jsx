import React from 'react';
import './NotFound.scss';

import withRouteReady from '../App/withRouteReady';

const NotFound = () => (
    <section className='NotFound'>
        <h1 className='NotFound__title'>404 not found</h1>
    </section>
);


export default withRouteReady(NotFound);