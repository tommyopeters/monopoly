import React from "react";

const Railroad = props => {
  return (
    <div className="space railroad">
      <div className="container">
        <div className="name long-name">{props.space.name}</div>
        <i className="drawing fas fa-subway"></i>
        <div className="price">
          <span className="million">₩</span>
          {props.space.price}
        </div>
      </div>
    </div>
  );
};

export default Railroad;
