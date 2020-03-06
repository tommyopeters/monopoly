import React, { useContext } from "react";

import { GameContext } from "../contexts/GameContext";
import PlayerTokens from "./tokens/PlayerTokens";

const TokenContainer = () => {
  const { SpacePositions } = useContext(GameContext);
  let spaceClones = [];
  for (let space in SpacePositions) {
    if (space !== "board") {
      let realPosition = {};
      realPosition.x = SpacePositions[space].x - SpacePositions["board"].x - 1;
      realPosition.y = SpacePositions[space].y - SpacePositions["board"].y - 2;
      realPosition.height = SpacePositions[space].height;
      realPosition.width = SpacePositions[space].width;
      spaceClones.push(
        <PlayerTokens key={space} id={space} settings={realPosition} />
      );
    }
  }
  console.log(spaceClones);
  return <div className="token-container">{spaceClones}</div>;
};

export default TokenContainer;
