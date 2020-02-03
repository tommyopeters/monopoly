import React from "react";
import Property from "./spaces/Property";
import ActionCard from "./spaces/ActionCard";
import Fee from "./spaces/Fee";
import Railroad from "./spaces/Railroad";

const BottomRow = () => {
  return (
    <div className="row horizontal-row bottom-row">
      <Property
        propertyName="Connecticut Avenue"
        color="light-blue"
        price={120}
      />
      <Property propertyName="Vermont Avenue" color="light-blue" price={100} />
      <ActionCard type="chance" />
      <Property propertyName="Oriental Avenue" color="light-blue" price={100} />
      <Railroad propertyName="Reading Railroad" price={200} />
      <Fee type="income" />
      <Property propertyName="Baltic Avenue" color="dark-purple" price={50} />
      <ActionCard type="community-chest" />
      <Property
        propertyName="Mediter-<br>ranean Avenue"
        color="dark-purple"
        price={50}
      />
    </div>
  );
};

export default BottomRow;
