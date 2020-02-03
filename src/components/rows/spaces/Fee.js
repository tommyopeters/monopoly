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
          <div class="drawing fa fa-diamond"></div>
        ) : (
          <div class="diamond"></div>
        )}
        {props.type === "luxury" ? (
          <div class="instructions">Pay N75M</div>
        ) : (
          <div class="instructions">
            Pay 10% <br /> or <br /> N200M
          </div>
        )}
      </div>
    </div>
  );
};

export default Fee;
