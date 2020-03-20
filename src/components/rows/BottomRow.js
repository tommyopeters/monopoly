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
      <Property space={SpaceList[9]} />
      <Property space={SpaceList[8]} />
      <Action space={SpaceList[7]} />
      <Property space={SpaceList[6]} />
      <Railroad space={SpaceList[5]} />
      <Fee space={SpaceList[4]} />
      <Property space={SpaceList[3]} />
      <Action space={SpaceList[2]} />
      <Property space={SpaceList[1]} />
    </div>
  );
};

export default BottomRow;
