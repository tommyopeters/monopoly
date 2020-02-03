import React from "react";

const Utility = props => {
  return (
    <div
      className={`space utility ${
        props.type === "electric" ? "electric-company" : "waterworks"
      }`}
    >
      <div className="container">
        <div className="property-name">
          {props.type === "electric" ? "electric-company" : "waterworks"}
        </div>
        {props.type === "electric" ? (
          <i className="drawing fas fa-lightbulb"></i>
        ) : (
          <i className="drawing fas fa-tint"></i>
        )}
        <div className="price">{props.price}</div>
      </div>
    </div>
  );
};

export default Utility;
