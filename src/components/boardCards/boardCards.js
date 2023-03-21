import React from "react";
import "./boardCards.css"
import Card from "../card/card"

function BoardCards() { 
    return (
        <div className="boardCards">
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default BoardCards;