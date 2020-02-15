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
      <Property space={SpaceList[18]} />
      <Action space={SpaceList[19]} />
      <Property space={SpaceList[20]} />
      <Property space={SpaceList[21]} />
      <Railroad space={SpaceList[22]} />
      <Property space={SpaceList[23]} />
      <Property space={SpaceList[24]} />
      <Utility space={SpaceList[25]} />
      <Property space={SpaceList[26]} />
    </div>
  );
};

export default TopRow;
