import React, { useContext } from "react";

import { GameContext } from "../contexts/GameContext";
import PlayerTokens from "./tokens/PlayerTokens";

const TokenContainer = () => {
  const { SpacePositions } = useContext(GameContext);
  let spaceClones = [];
  for (let space in SpacePositions) {
    if (space !== "board") {
      spaceClones.push(
        <PlayerTokens key={space} id={space} settings={SpacePositions[space]} />
      );
    }
  }
  return <div className="token-container">{spaceClones}</div>;
};

export default TokenContainer;
