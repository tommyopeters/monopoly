import React from "react";
import Property from "./spaces/Property";
import ActionCard from "./spaces/ActionCard";
import Railroad from "./spaces/Railroad";
import Utility from "./spaces/Utility";
import { SpaceList } from "../../engine/SpaceList";

const LeftRow = () => {
  return (
    <div className="row vertical-row left-row">
      <Property space={SpaceList[17]} />
      <Property space={SpaceList[16]} />
      <ActionCard space={SpaceList[15]} />
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
