import React from "react";
import Data from "./data.json"

export let filmStore = {
    films: Data,
    favorite: false,
}

let Context = React.createContext(filmStore)

export default Context
