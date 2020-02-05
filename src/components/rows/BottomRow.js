import React from "react";
import Property from "./spaces/Property";
import ActionCard from "./spaces/ActionCard";
import Fee from "./spaces/Fee";
import Railroad from "./spaces/Railroad";
import { SpaceList } from "../../engine/SpaceList";

const BottomRow = () => {
  return (
    <div className="row horizontal-row bottom-row">
      <Property space={SpaceList[8]} />
      <Property space={SpaceList[7]} />
      <ActionCard space={SpaceList[6]} />
      <Property space={SpaceList[5]} />
      <Railroad space={SpaceList[4]} />
      <Fee space={SpaceList[3]} />
      <Property space={SpaceList[2]} />
      <ActionCard space={SpaceList[1]} />
      <Property space={SpaceList[0]} />
    </div>
  );
};

export default BottomRow;
