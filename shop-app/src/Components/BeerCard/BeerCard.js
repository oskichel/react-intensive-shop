import React, { useState, useEffect } from "react";
import st from './BeerCard.module.css';
import { useParams } from "react-router-dom";
import MyButton from "../UI/Button/MyButton";
import Counter from '../Counter/Counter'

const BeerCard = () => {
    const {id} = useParams();
    const [beer, setBeer] = useState(null);

    useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers/${id}`)
        .then(res => res.json())
        .then(data => setBeer(data))
    }, [id]);


    return (
        <div>
            {beer && (
                <>
                    <h1>{beer.name}</h1>
                    <div>{beer.abv}</div>
                    <Counter/>
                    <MyButton>В корзину</MyButton>
                </>
            )}
        </div>
    );
}

export default BeerCard;