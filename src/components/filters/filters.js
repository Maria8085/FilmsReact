import { FormControl, MenuItem, Select } from "@material-ui/core";
import React from "react";
import "./filters.css"
import { genreDict } from "../../constant";

function Filters() {
    return (
        //работает не корректно, починить
        <div className="filters">
            <FormControl>
                <Select
                    className="filterGenre"
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">Все</MenuItem>
                    {(Object.keys(genreDict)).map((genreId) => (<MenuItem value={genreId}>{genreDict[genreId]}</MenuItem>))}
                </Select>
            </FormControl>
            <input className="filterFilms" placeholder="Введите название"/>
        </div>
    )
 }

export default Filters