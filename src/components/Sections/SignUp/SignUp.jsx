import React from 'react';
import gsap from 'gsap';

import withRouteReady from '../../App/withRouteReady';

import './SignUp.scss';

const SignUp = () => {

    React.useEffect(() => {
        const timeline = gsap.timeline();
        timeline.from('.SignUp__text', { y: -40, opacity: 0, duration: 1 });
        timeline.from('.SignUp__form', { y: -40, opacity: 0, duration: 1 });
    }, []);

    return (
        <section className='SignUp'>
            <div className='SignUp__content'>
                <h1 className='SignUp__title'>Sign Up Now</h1>
                <p className='SignUp__text'>Use the Minini VR controller as a remote control to navigate your
                    virtual reality with ease or use it as a gamepad.</p>
                <form className='SignUp__form'>
                    <input className='SignUp__input' type='text' placeholder='Name' required></input>
                    <input className='SignUp__input' type='email' placeholder='Email' required></input>
                    <button className='SignUp__button'>Sign Up Now</button>
                </form>
            </div>
        </section>
    );
};

export default withRouteReady(SignUp);