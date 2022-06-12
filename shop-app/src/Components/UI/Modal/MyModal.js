import React from 'react';
import st from './MyModal.module.css';
import close from '../../Icons/close.png'

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [st.modal]
    if (visible) {
        rootClasses.push(st.modal__active);
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={st.modal__content}>
                <button onClick={() => setVisible(false)} className={st.modal__close}><img src={close} alt={'close'}></img></button>
                {children}
            </div>
        </div>
    );
};

export default MyModal;