import React, { useState, useEffect } from "react";
import st from './BeerCard.module.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import MyButton from "../UI/Button/MyButton";
import Counter from '../Counter/Counter';

const BeerCard = () => {
    const { id } = useParams();
    const [beer, setBeer] = useState(null);
    const [available, setAvailable] = useState(false);

    useEffect(() => {
        async function fetchBeer() {
            try {
                const {data} = await axios.get('https://api.punkapi.com/v2/beers/' + id);
                setBeer(data[0]);
            } catch (error) {
                alert('Ошибка при получении данных');
            }
        }
        fetchBeer();
      
    }, [id]);

    useEffect(() => {
        id % 2 === 0 ? setAvailable(true) : setAvailable(false);
      }, [beer]);


    if (!beer) {
        return 'Идет загрузка...';
    }
    return (
        <div className={st.card}>
            <img src={beer.image_url} className={st.img} alt={'beer'}></img>
            <div className={st.container}>
                <h2>{beer.name}</h2>
                <div className={st.price}>${beer.abv}</div>
                <div>
                    {available 
                    ? 
                    <div className={st.store}>
                        <Counter/>
                        <MyButton>Добавить в корзину</MyButton>
                    </div>
                    : 
                    <div className={st.store}><MyButton disabled>Нет в наличии</MyButton></div>}
                </div>
                <div></div>
                <h3>{beer.tagline}</h3>
                <div>{beer.description}</div>
            </div>
        </div>

   
    );
}

export default BeerCard;