import React from "react";

const Railroad = props => {
  return (
    <div className="space railroad">
      <div className="container">
        <div className="name long-name">{props.propertyName}</div>
        <i className="drawing fas fa-subway"></i>
        <div className="price">{props.price}</div>
      </div>
    </div>
  );
};

export default Railroad;
