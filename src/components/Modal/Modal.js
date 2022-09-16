import React from 'react';
// Necesitamos ReactDOM para renderizar nuestro modal en el DOM
import { createPortal } from 'react-dom';
import { CloseModal } from '../CloseModal/CloseModal';
import './Modal.css';

function Modal({ children }) {
    // ReactDom tiene este método para crear portales
    return createPortal(

        <div className="ModalBackground">
            <CloseModal></CloseModal>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };