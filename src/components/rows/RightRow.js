import React from "react";
import Property from "./spaces/Property";

const RightRow = () => {
  return (
    <div className="row vertical right">
      <Property propertyName="Vermont Avenue" color="light-blue" price={100} />
    </div>
  );
};

export default RightRow;
