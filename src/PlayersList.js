import React from "react";
import Player from "./Player";
// import playerData from "./players";


const PlayersList = ({playerlist}) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    minHeight: "100vh", 
    backgroundColor: "purple" }}>
      {playerlist.map((player, index) => (
        <Player key={index} player={player} />
      ))}
    </div>
  );
};

export default PlayersList;
