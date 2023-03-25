import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useContext } from "react";
import "./filters.css";
import { genreDict } from "../../constant";
import Context from "../context";

function Filters() {
	const { setFilters, store } = useContext(Context);
	function handleChangeName(e) {
		setFilters({
			genre: store.filters.genre,
			name: e.target.value,
		});
	}
	function handleChangeGenre(e) {
		setFilters({
			genre: e.target.value,
			name: store.filters.name,
		});
	}
	return (
		<div className="filters">
			<FormControl>
				<Select
					className="filterGenre"
					displayEmpty
					value={store.filters.genre}
					inputProps={{ "aria-label": "Without label" }}
					onChange={handleChangeGenre}
				>
					<MenuItem value={false}>Все</MenuItem>
					{Object.keys(genreDict).map((genreId) => (
						<MenuItem key={genreId} value={genreId}>
							{genreDict[genreId]}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<input
				onChange={handleChangeName}
				value={store.filters.name}
				className="filterFilms"
				placeholder="Введите название"
			/>
		</div>
	);
}

export default Filters;
