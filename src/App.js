import React, { useContext } from "react"
import Context from "./components/context";
import BoardCards from "./components/boardCards/boardCards";
import Filters from "./components/filters/filters";

function App() {
  const films = useContext(Context);
  return (
      <div className="wrapper">
        <BoardCards title="Популярные фильмы" films={films} Filters={Filters} />
        <BoardCards title="Самый лучший фильм" films={[films[1]]}/>
      </div>
  );
}

export default App;