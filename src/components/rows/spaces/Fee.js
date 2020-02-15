import React from "react";

const Fee = props => {
  return (
    <div
      id={props.space.id}
      className={`space fee ${
        props.space.type === "luxury" ? "luxury-tax" : "income-tax"
      }`}
    >
      <div className="container">
        {props.space.type === "luxury" ? (
          <div className="name"> Luxury Tax</div>
        ) : (
          <div className="name"> Income Tax</div>
        )}
        {props.space.type === "luxury" ? (
          <div className="drawing fa fa-diamond"></div>
        ) : (
          <div className="diamond"></div>
        )}
        {props.space.type === "luxury" ? (
          <div className="instructions">
            Pay <span className="million">₩</span>75
          </div>
        ) : (
          <div className="instructions">
            Pay 10% <br /> or <br /> <span className="million">₩</span>200
          </div>
        )}
      </div>
    </div>
  );
};

export default Fee;
