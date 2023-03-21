import React from "react";
import './card.css';

function Card() { 
    return (
        <div className="card">
            <img className="imageCard" src="" alt=""/>
            <h3 className="titleCard">Список Шиндлера</h3>
            <p className="contentCard">драма, биография, история, военный</p>
            <p className="contentCard">1993</p>
        </div>
    );
}
export default Card