import React, { useState, useEffect } from "react";
import axios from "axios";
import st from './BeerList.module.css'
import MyButton from "../UI/Button/MyButton";
import { NavLink } from "react-router-dom";

const BeerList = () => {

    const [beers, setBeer] = useState([]);

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
                    <div className={st.wrapbutton}><MyButton className={st.button}>Добавить в корзину</MyButton></div>
                </div>)
            }

        </div>
    )
    
}

export default BeerList;