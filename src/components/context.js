import React from "react";
import Data from "./data.json"

// filmStore = {
//     films: Data,
//     favorite: false,
// }

const Context = React.createContext(Data)

export default Context