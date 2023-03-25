import React, { useState } from "react";
import Context, { filmStore } from "./components/context";
import BoardCards from "./components/boardCards/boardCards";
import Filters from "./components/filters/filters";

function App() {
	let [store, setStore] = useState(filmStore);

	function setFilters({ genre, name }) {
		setStore({
			films: store.films,
			favorite: store.favorite,
			filters: {
				genre,
				name,
			},
		});
	}

	function toggleFilm(id) {
		if (store.favorite === id) {
			setStore({
				films: store.films,
				favorite: false,
				filters: store.filters,
			});
			localStorage.removeItem("favorite");
		} else {
			setStore({
				films: store.films,
				favorite: id,
				filters: store.filters,
			});
			localStorage.setItem("favorite", id);
		}
	}

	function filterGenre(film) {
		let filteredName = true;
		let filteredGenre = true;
		if (store.filters.genre === false) {
		} else {
			filteredGenre = film.genre.includes(Number(store.filters.genre));
		}

		if (store.filters.name === "") {
		} else {
			filteredName = film.name.includes(store.filters.name);
		}

		return filteredName && filteredGenre;
	}

	return (
		<Context.Provider value={{ store, toggleFilm, setFilters }}>
			<div className="wrapper">
				<BoardCards
					title="Популярные фильмы"
					films={store.films.filter(filterGenre)}
					Filters={Filters}
				/>
				{store.favorite && (
					<BoardCards
						title="Самый лучший фильм"
						films={[
							store.films.find((film) => film.id === Number(store.favorite)),
						]}
					/>
				)}
			</div>
		</Context.Provider>
	);
}

export default App;
