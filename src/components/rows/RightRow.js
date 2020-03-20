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
      <Property space={SpaceList[31]} />
      <Property space={SpaceList[32]} />
      <Action space={SpaceList[33]} />
      <Property space={SpaceList[34]} />
      <Railroad space={SpaceList[35]} />
      <Action space={SpaceList[36]} />
      <Property space={SpaceList[37]} />
      <Fee space={SpaceList[38]} />
      <Property space={SpaceList[39]} />
    </div>
  );
};

export default RightRow;
