import React, {useState} from 'react';
import st from './Header.module.css';
import { NavLink } from "react-router-dom";
import logo from '../Icons/logo.svg'
import MyButton from '../UI/Button/MyButton';
import MyModal from '../UI/Modal/MyModal';
import Login from '../Login/Login';
import Cart from '../Cart/Cart';

function Header() {

    const [modal, setModal] = useState(false);

    return (
        <div>
            <div className={st.header}>
            <img src={logo} className={st.header__logo} alt={'logo'}></img>
            <NavLink to={'/'} className={st.header__menu}>Главная</NavLink>
            <NavLink to={'/about'} className={st.header__menu}>О магазине</NavLink>
            <Cart  className={st.header__menu} />
            <div className={st.header__button}>
                <MyButton onClick={() => setModal(true)}>Войти</MyButton></div>
            </div>
            <MyModal visible={modal} setVisible={setModal}><Login/></MyModal>
        </div>
    );
}

export default Header;