import React, { useContext } from "react";
import Property from "./spaces/Property";
import Action from "./spaces/Action";
import Railroad from "./spaces/Railroad";
import Utility from "./spaces/Utility";
import { GameContext } from "../../contexts/GameContext";

const LeftRow = () => {
  const { Game } = useContext(GameContext);
  let SpaceList = Game.SpaceList;
  return (
    <div className="row vertical-row left-row">
      <Property space={SpaceList[17]} />
      <Property space={SpaceList[16]} />
      <Action space={SpaceList[15]} />
      <Property space={SpaceList[14]} />
      <Railroad space={SpaceList[13]} />
      <Property space={SpaceList[12]} />
      <Property space={SpaceList[11]} />
      <Utility space={SpaceList[10]} />
      <Property space={SpaceList[9]} />
    </div>
  );
};

export default LeftRow;
