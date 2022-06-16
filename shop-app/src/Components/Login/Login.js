import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import st from './Login.module.css'
import MyInput from '../UI/Input/MyInput';
import MyButton from '../UI/Button/MyButton';
import { AuthContext } from '../../Context';

const Login = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [nameDirty, setNameDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [nameError, setNameError] = useState('Поле должно быть заполнено');
    const [passwordError, setPasswordError] = useState('Поле должно быть заполнено');
    const navigate = useNavigate();

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const handleName = (e) => {
        setName(e.target.value)
        if (!e.target.value) {
            return setNameError('Поле должно быть заполнено');
        } else {
            setNameError('');
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if (!e.target.value) {
            return setPasswordError('Поле должно быть заполнено');
        } else {
            setPasswordError('');
        }
    }

    const handleReset = () => {
        setName('');
        setNameDirty('');
        setNameError('');
        setPassword('');
        setPasswordDirty('');
        setPasswordError('');
    }

    const handleLogin = () => {
        let yesBlur = false;
        let noError = false;
        let loginTrue = false;
        let passwordTrue = false;

        if (name.length < 2) {
            setNameError('Логин должен состоять из 2 символов и более');
            loginTrue = false;
        } else {
            setNameError('');
            loginTrue = true;
        }
        if (password.length < 1) {
            setPasswordError('Поле обязательно для заполнения');
            passwordTrue = false;
        } else {
            setPasswordError('');
            passwordTrue = true;
        }

        if (nameDirty && passwordDirty) {
            yesBlur = true;
        } else {
            yesBlur = false;
        }

        if (nameError === '' && passwordError === '') {
            noError = true;
        } else {
            noError = false;
        }

        if (loginTrue && passwordTrue && yesBlur) {
            setIsAuth(true);
            navigate('/');
        } else {
            setIsAuth(false);
        }


    };

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
    }


    return (
        <div className={st.login}>
            <h2 className={st.login__title}>Авторизация</h2>
            <form onSubmit={login}>
                {(nameDirty && nameError) && <div className={st.error}>{nameError}</div>}
                <MyInput 
                className={st.input}
                type='text' 
                placeholder='Введите логин'
                name='name'
                value={name}
                error={nameError}
                onChange={(e) => handleName(e)}
                onBlur={(e) => blurHandler(e)}
                />
                {(passwordDirty && passwordError) && <div className={st.error}>{passwordError}</div>}
                <MyInput 
                className={st.input}
                type='password' 
                placeholder='Введите пароль'
                name='password'
                value={password}
                error={passwordError}
                onChange={(e) => handlePassword(e)}
                onBlur={(e) => blurHandler(e)}
                />
                <div className={st.login__btn}>
                    <MyButton className={st.button} onClick={handleReset}>Отмена</MyButton>
                    <MyButton className={st.button} onClick={handleLogin}>Войти</MyButton>
                </div>
            </form>
        </div>
        
    );
}

export default Login;