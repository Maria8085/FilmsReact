import React, { useContext } from "react";
import './card.css';
import { genreDict } from "../../constant";
import { FavoriteBorder,Favorite} from '@material-ui/icons';
import Context from "../context";

function Card({ id, name, year, genre }) {
    const {store,toggleFilm} = useContext(Context)
    return (
        <div className="card">
            <div>
                <img className="imageCard" src={`images/${id}.jpeg`} alt=""/>
                <h3 className="titleCard">{name}</h3>
                <p className="contentCard">{genre.map((genreId) => (genreDict[genreId])).join(", ")}</p>
                <p className="contentCard">{year}</p>
            </div>
            <button className="favoriteCard" onClick={() => toggleFilm(id)}>
                {store.favorite === id? <Favorite /> :<FavoriteBorder />}
            </button>
        </div>
    );
}
export default Card