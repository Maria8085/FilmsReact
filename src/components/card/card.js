import React from "react";
import './card.css';
import { genreDict } from "../../constant";
import { FavoriteBorder,Favorite} from '@material-ui/icons';

function Card({ id, name, year, genre, favorite=false}) { 
    return (
        <div className="card">
            <div>
                <img className="imageCard" src={`images/${id}.jpeg`} alt=""/>
                <h3 className="titleCard">{name}</h3>
                <p className="contentCard">{genre.map((genreId) => (genreDict[genreId])).join(", ")}</p>
                <p className="contentCard">{year}</p>
            </div>
            <button className="favoriteCard">
                {favorite? <Favorite /> :<FavoriteBorder />}
            </button>
        </div>
    );
}
export default Card