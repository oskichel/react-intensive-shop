import React from "react";
import st from './Cart.module.css';
import cart_icon from '../Icons/cart_icon.svg'

const Cart = function () {
    

    return (
        <div className={st.cart}>
            <img src={cart_icon} className={st.icon} alt={'card-icon'}></img>
            В корзине:
        </div>
    )
};

export default Cart;