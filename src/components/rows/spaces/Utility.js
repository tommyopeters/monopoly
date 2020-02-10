import React from "react";

const Utility = props => {
  return (
    <div
      className={`space utility ${
        props.space.type === "electric" ? "electric-company" : "waterworks"
      }`}
    >
      <div className="container">
        <div className="name">
          {props.space.type === "electric" ? "electric company" : "waterworks"}
        </div>
        {props.space.type === "electric" ? (
          <i className="drawing far fa-lightbulb"></i>
        ) : (
          <i className="drawing fas fa-tint"></i>
        )}
        <div className="price">
          <span className="million">₩</span>
          {props.space.price}
        </div>
      </div>
    </div>
  );
};

export default Utility;
