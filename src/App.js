import React from "react";
import PlayersList from "./PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";
import players from "./players";
import "./App.css" ;

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    
    backgroundColor: "purple"
    }}> 
      <h1  >FIFA Player Cards</h1>
      <PlayersList playerlist={players} />
    </div>
    
  );
  
}


export default App;
