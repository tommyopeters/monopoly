import React from "react";
import Property from "./spaces/Property";
import ActionCard from "./spaces/ActionCard";
import Railroad from "./spaces/Railroad";
import Utility from "./spaces/Utility";

const TopRow = props => {
  return (
    <div className="row horizontal-row top-row">
      <Property propertyName="Kentucky Avenue" color="red" price={220} />
      <ActionCard type="chance" />
      <Property propertyName="Indiana Avenue" color="red" price={220} />
      <Property propertyName="Illinois Avenue" color="red" price={200} />
      <Railroad propertyName="B $ O Railroad" price={200} />
      <Property propertyName="Atlantic Avenue" color="yellow" price={260} />
      <Property propertyName="Ventnor Avenue" color="red" price={260} />
      <Utility type="waterworks" price={150} />
      <Property propertyName="Marvin Gardens" color="red" price={280} />
    </div>
  );
};

export default TopRow;
