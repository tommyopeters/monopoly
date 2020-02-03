import React from "react";
import Property from "./spaces/Property";

const TopRow = props => {
  return (
    <div className="row horizontal top">
      <Property propertyName="Vermont Avenue" color="light-blue" price={100} />
    </div>
  );
};

export default TopRow;
