import { FormControl, NativeSelect } from "@material-ui/core";
import React from "react";
import "./filters.css"
import { genreDict } from "../../constant";

function Filters() {
    return (
        <div className="filters">
            <FormControl >
                <NativeSelect
                    className="filterGenre"
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <option value="">Все</option>
                    {(Object.keys(genreDict)).map((genreId) => (<option value={genreId}>{genreDict[genreId]}</option>))}
                </NativeSelect>
            </FormControl>
            <input className="filterFilms" placeholder="Введите название"/>
        </div>
    )
 }

export default Filters