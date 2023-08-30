import React from "react";
import Player from "./Player";
// import playersData from "./players";

const PlayersList = ({playerlist}) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {playerlist.map((player, index) => (
        <Player key={index} player={player} />
      ))}
    </div>
  );
};

export default PlayersList;
