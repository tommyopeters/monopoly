import React from "react";

const Fee = props => {
  return (
    <div
      className={`space fee ${
        props.type === "luxury" ? "luxury-tax" : "income-tax"
      }`}
    >
      <div className="container">
        {props.type === "luxury" ? (
          <div className="name"> Luxury Tax</div>
        ) : (
          <div className="name"> Income Tax</div>
        )}
        {props.type === "luxury" ? (
          <div className="drawing fa fa-diamond"></div>
        ) : (
          <div className="diamond"></div>
        )}
        {props.type === "luxury" ? (
          <div className="instructions">Pay N75M</div>
        ) : (
          <div className="instructions">
            Pay 10% <br /> or <br /> N200M
          </div>
        )}
      </div>
    </div>
  );
};

export default Fee;
