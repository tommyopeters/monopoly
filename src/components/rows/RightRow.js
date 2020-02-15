import React, { useContext } from "react";
import Property from "./spaces/Property";
import Action from "./spaces/Action";
import Railroad from "./spaces/Railroad";
import Fee from "./spaces/Fee";
import { GameContext } from "../../contexts/GameContext";

const RightRow = () => {
  const { Game } = useContext(GameContext);
  let SpaceList = Game.SpaceList;

  return (
    <div className="row vertical-row right-row">
      <Property space={SpaceList[27]} />
      <Property space={SpaceList[28]} />
      <Action space={SpaceList[29]} />
      <Property space={SpaceList[30]} />
      <Railroad space={SpaceList[31]} />
      <Action space={SpaceList[32]} />
      <Property space={SpaceList[33]} />
      <Fee space={SpaceList[34]} />
      <Property space={SpaceList[35]} />
    </div>
  );
};

export default RightRow;
