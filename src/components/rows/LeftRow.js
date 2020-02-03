import React from "react";
import Property from "./spaces/Property";
import ActionCard from "./spaces/ActionCard";
import Railroad from "./spaces/Railroad";
import Utility from "./spaces/Utility";

const LeftRow = () => {
  return (
    <div className="row vertical-row left-row">
      <Property propertyName="New York Avenue" color="orange" price={200} />
      <Property propertyName="Tennessee Avenue" color="orange" price={200} />
      <ActionCard type={"community"} />
      <Property propertyName="St. James Avenue" color="orange" price={180} />
      <Railroad propertyName="Pennsylvania Railroad" price={200} />
      <Property propertyName="Virginia Avenue" color="purple" price={160} />
      <Property propertyName="States Avenue" color="purple" price={140} />
      <Utility type="electric" price={150} />
      <Property propertyName="States Avenue" color="purple" price={140} />
    </div>
  );
};

export default LeftRow;
