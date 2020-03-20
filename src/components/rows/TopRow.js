import React, { useContext } from "react";
import Property from "./spaces/Property";
import Action from "./spaces/Action";
import Railroad from "./spaces/Railroad";
import Utility from "./spaces/Utility";
import { GameContext } from "../../contexts/GameContext";

const TopRow = props => {
  const { Game } = useContext(GameContext);
  let SpaceList = Game.SpaceList;
  return (
    <div className="row horizontal-row top-row">
      <Property space={SpaceList[21]} />
      <Action space={SpaceList[22]} />
      <Property space={SpaceList[23]} />
      <Property space={SpaceList[24]} />
      <Railroad space={SpaceList[25]} />
      <Property space={SpaceList[26]} />
      <Property space={SpaceList[27]} />
      <Utility space={SpaceList[28]} />
      <Property space={SpaceList[29]} />
    </div>
  );
};

export default TopRow;
