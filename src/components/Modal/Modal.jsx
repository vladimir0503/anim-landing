import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';

const Modal = ({ onClose }) => {

    return ReactDOM.createPortal(
        (
            <div className='Modal'>
                <button onClick={onClose} className='Modal__closeButton'>x</button>
                <div className='Modal__content'>
                    Я модальное окно
                </div>
            </div>
        ),
        document.body
    );
};

export default Modal;