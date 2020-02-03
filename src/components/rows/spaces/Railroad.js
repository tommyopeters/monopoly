import React from "react";

const Railroad = props => {
  return (
    <div className="space railroad">
      <div className="container">
        <div className="property-name">{props.propertyName}</div>
        <i className="fas fa-subway"></i>
        <div className="price">{props.price}</div>
      </div>
    </div>
  );
};

export default Railroad;
