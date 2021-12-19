import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import { page } from '../../router';
import { hideNextPage, showLoader } from './animation';

import Home from '../Sections/Home/Home';
import Features from '../Sections/Features/Features';
import SignUp from '../Sections/SignUp/SignUp';
import NotFound from '../NotFound/NotFound';

const RouteAnimation = ({ location }) => {
    const { home, features, signUp } = page;

    return (
        <TransitionGroup component={null}>
            <Transition
                key={location.key}
                timeout={{ enter: 200, exit: 1000 }}
                onEnter={hideNextPage}
                onExit={showLoader}
            >
                <Routes location={location}>
                    <Route path={home} element={<Home />} />
                    <Route path={features} element={<Features />} />
                    <Route path={signUp} element={<SignUp />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Transition>
        </TransitionGroup>
    );
};

export default RouteAnimation;