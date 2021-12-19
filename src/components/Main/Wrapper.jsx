import React from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap';

import './Main.scss';

const Wrapper = () => {

    React.useEffect(() => {
        gsap.from('.Wrapper', { x: '100%', duration: 1 });
    }, []);

    return (
        ReactDOM.createPortal(
            <div className='Wrapper'></div>,
            document.body
        )
    );
};

export default Wrapper;