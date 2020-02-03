import React from "react";
import Property from "./spaces/Property";
import ActionCard from "./spaces/ActionCard";
import Railroad from "./spaces/Railroad";
import Fee from "./spaces/Fee";

const RightRow = () => {
  return (
    <div className="row vertical-row right-row">
      <Property propertyName="Pacific Avenue" color="green" price={300} />
      <Property
        propertyName="North Carolina Avenue"
        color="green"
        price={300}
        class="three-ilne-name"
      />
      <ActionCard type="community" />
      <Property
        propertyName="Penysylvania Avenue"
        class="long-name"
        color="green"
        price={320}
      />
      <Railroad propertyName="Short Line" price={200} />
      <ActionCard type="chance" />
      <Property propertyName="Park Place" color="dark-blue" price={350} />
      <Fee type="luxury" />
      <Property propertyName="Boardwalk" color="dark-blue" price={400} />
    </div>
  );
};

export default RightRow;
