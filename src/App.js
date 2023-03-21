import React from "react"
import Context from "./components/context";
import BoardCards from "./components/boardCards/boardCards";

function App() {
  return (
    <Context.Provider>
      <div className="wrapper">
        <h2 className="title">Популярные фильмы</h2>
        <BoardCards/>
      </div>
    </Context.Provider>
  );
}

export default App;