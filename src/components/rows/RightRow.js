import React from "react";
import Property from "./spaces/Property";
import ActionCard from "./spaces/ActionCard";
import Railroad from "./spaces/Railroad";
import Fee from "./spaces/Fee";
import SpaceList from "../../engine/SpaceList.json";

const RightRow = () => {
  return (
    <div className="row vertical-row right-row">
      <Property space={SpaceList[27]} />
      <Property space={SpaceList[28]} />
      <ActionCard space={SpaceList[29]} />
      <Property space={SpaceList[30]} />
      <Railroad space={SpaceList[31]} />
      <ActionCard space={SpaceList[32]} />
      <Property space={SpaceList[33]} />
      <Fee space={SpaceList[34]} />
      <Property space={SpaceList[35]} />
    </div>
  );
};

export default RightRow;
