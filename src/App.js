import React, { useState } from "react"
import Context, { filmStore } from "./components/context";
import BoardCards from "./components/boardCards/boardCards";
import Filters from "./components/filters/filters";

function App() {
  let [store, setStore] = useState(filmStore);

  function toggleFilm(id) {
    console.log(id);
    if (store.favorite === id) { 
      setStore({
        films: store.films,
        favorite: false
      })
    } else {
    setStore({
      films: store.films,
      favorite: id
    })
    }
    
  }

  return (
    <Context.Provider value={{store, toggleFilm}}>
      <div className="wrapper">
        <BoardCards title="Популярные фильмы" films={store.films} Filters={Filters} />
        {store.favorite &&
          <BoardCards title="Самый лучший фильм" films={[store.films.find((film) =>(film.id === store.favorite))]} />
        }
      </div>
    </Context.Provider>
  );
}

export default App;