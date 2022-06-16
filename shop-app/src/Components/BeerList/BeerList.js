import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import st from './BeerList.module.css'
import MyButton from "../UI/Button/MyButton";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context";

const BeerList = () => {

    const [beers, setBeer] = useState([]);
    const {isAuth, setIsAuth} = useContext(AuthContext);
    

    useEffect(() => {
        axios.get('https://api.punkapi.com/v2/beers')
        .then(res => {
            setBeer(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })

    


    return (
        <div className={st.list}>
            {
                beers.map(beer => 
                <div key={beer.id} className={st.card}>
                    <img src={beer.image_url} className={st.beerpic} alt={'beer'}></img>
                    <NavLink to={`/${beer.id}`} className={st.name}>{beer.name}</NavLink>
                    <div className={st.price}>${beer.abv}</div>
                    {isAuth
                    ?
                    <div className={st.wrapbutton}>
                        {(beer.id % 2 === 0) 
                        ? 
                        <MyButton className={st.button}>Добавить в корзину</MyButton> 
                        : 
                        <MyButton disabled className={st.button}>Нет в наличии</MyButton>}
                    </div>
                    :
                    <div className={st.nologin}>Залогиньтесь, чтобы добавить товар в корзину</div>
                    }
                </div>
                
                
                
                
                )
            }

        </div>
    )
    
}

export default BeerList;