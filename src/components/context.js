import React from "react";
import Data from "./data.json";

export let filmStore = {
	films: Data,
	favorite: localStorage.getItem("favorite") || false,
	filters: {
		genre: false,
		name: "",
	},
};

let Context = React.createContext(filmStore);

export default Context;
