import React from 'react';
import { gsap } from 'gsap';

import image1 from './assets/1.jpg'
import image2 from './assets/2.jpg'
import image3 from './assets/3.jpeg'
import image4 from './assets/4.jpg'
import image5 from './assets/5.jpg'
import Modal from '../../Modal/Modal';
import withRouteReady from '../../App/withRouteReady';

import './Features.scss';

const Features = () => {
    const [canShowModal, setModal] = React.useState(false);

    const showModal = () => setModal(true);
    const closeModal = () => setModal(false);

    React.useEffect(() => {
        const timeline = gsap.timeline();
        timeline.from('.Features__title', { y: -40, opacity: 0, duration: 1 });
        timeline.from('.Features__text', { y: -40, opacity: 0, duration: 1 });
    }, []);

    return (
        <section className='Features'>
            <h1 className='Features__title'>A Fitting Design</h1>
            <p className='Features__text'>If you want to spend hours with your Mimini VR, you can:
                the Mimini VR is engineered with your comfort in mind and is
                designed to feel comfortable when you’re wearing it.</p>
            <button onClick={showModal} className='Features__button'>Click me</button>
            {canShowModal && <Modal onClose={closeModal} />}
            <div className='Features__imageGrid'>
                <div className='Features__imageMain'>
                    <img className='Features__image' src={image1} alt='Interior 1' width='300' />
                </div>
                <div className='Features__imageGridRow'>
                    <div className='Features__imageGridColumn'>
                        <img className='Features__image Features__image2' src={image2} alt='Interior 2' width='300' />
                        <img className='Features__image Features__image3' src={image3} alt='Interior 3' width='300' />
                    </div>
                    <div className='Features__imageGridColumn'>
                        <img className='Features__image Features__image4' src={image4} alt='Interior 4' width='300' />
                        <img className='Features__image Features__image5' src={image5} alt='Interior 5' width='300' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withRouteReady(Features);