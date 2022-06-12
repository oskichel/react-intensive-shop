import React from 'react';
import st from './Login.module.css'
import MyInput from '../UI/Input/MyInput';
import MyButton from '../UI/Button/MyButton';

const Login = () => {
    return (
        <div className={st.login}>
            <h2 className={st.login__title}>Авторизация</h2>
            <form>
                <MyInput type='text' placeholder='Введите логин'/>
                <MyInput type='password' placeholder='Введите пароль'/>
                <div className={st.login__btn}>
                    <MyButton className={st.button}>Отмена</MyButton>
                    <MyButton className={st.button}>Войти</MyButton>
                </div>
            </form>
        </div>
        
    );
}

export default Login;