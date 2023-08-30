import React from "react";
import PlayersList from "./PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";
import players from "players";

function App() {
  return (
    <div className="App">
      <h1>FIFA Player Cards</h1>
      <PlayersList playerlist={players} />
    </div>
  );
}

export default App;
