import React, {useContext, useState} from 'react';
import st from './Header.module.css';
import { NavLink } from "react-router-dom";
import logo from '../Icons/logo.svg'
import MyButton from '../UI/Button/MyButton';
import MyModal from '../UI/Modal/MyModal';
import Login from '../Login/Login';
import Cart from '../Cart/Cart';
import { AuthContext } from '../../Context';

function Header() {

    const [modal, setModal] = useState(false);
    const {isAuth, setIsAuth} = useContext(AuthContext);

   

    return (
        <div>
            <div className={st.header}>
                <img src={logo} className={st.header__logo} alt={'logo'}></img>
                <NavLink to={'/'} className={st.header__menu}>Главная</NavLink>
                <NavLink to={'/about'} className={st.header__menu}>О магазине</NavLink>
                
                {isAuth ?
                <div className={st.header}>
                    <Cart  className={st.header__menu} />
                    <div className={st.header__button}>
                        <MyButton onClick={() => {setIsAuth(false); setModal(false)}}>Выйти</MyButton></div>
                </div>
                :
                <div>
                    <div className={st.header__button}>
                        <MyButton onClick={() => setModal(true)}>Войти</MyButton>
                        <MyModal visible={modal} setVisible={setModal}><Login/></MyModal>
                    </div>
                </div>}
  
            </div>
            
        </div>
    );
}

export default Header;