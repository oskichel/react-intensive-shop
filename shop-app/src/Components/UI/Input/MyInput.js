import React from 'react';
import st from './MyInput.module.css';


const MyInput = (props) => {
    return (
        <input {...props} className={st.input}/>
    );
};

export default MyInput;