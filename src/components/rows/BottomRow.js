import React, { useContext } from "react";
import Property from "./spaces/Property";
import Action from "./spaces/Action";
import Fee from "./spaces/Fee";
import Railroad from "./spaces/Railroad";
import { GameContext } from "../../contexts/GameContext";

const BottomRow = () => {
  const { Game } = useContext(GameContext);
  let SpaceList = Game.SpaceList;

  return (
    <div className="row horizontal-row bottom-row">
      <Property space={SpaceList[8]} />
      <Property space={SpaceList[7]} />
      <Action space={SpaceList[6]} />
      <Property space={SpaceList[5]} />
      <Railroad space={SpaceList[4]} />
      <Fee space={SpaceList[3]} />
      <Property space={SpaceList[2]} />
      <Action space={SpaceList[1]} />
      <Property space={SpaceList[0]} />
    </div>
  );
};

export default BottomRow;
