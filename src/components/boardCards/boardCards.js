import React from "react";
import "./boardCards.css"
import Card from "../card/card"

function BoardCards({title, films, Filters}) {
    
    return (
        <>
            <h2 className="title">{title}</h2>
            {Filters? <Filters />: null}
            <div className="boardCards">
                {films.map((film) => <Card key={film.id} id={film.id} name={film.name} year={film.year} genre={ film.genre} />)}
            </div>
        </>
    )
}

export default BoardCards;