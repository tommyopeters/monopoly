import React from "react";
import Property from "./spaces/Property";
import ActionCard from "./spaces/ActionCard";
import Railroad from "./spaces/Railroad";
import Utility from "./spaces/Utility";
import { SpaceList } from "../../engine/SpaceList";

const TopRow = props => {
  return (
    <div className="row horizontal-row top-row">
      <Property space={SpaceList[18]} />
      <ActionCard space={SpaceList[19]} />
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
