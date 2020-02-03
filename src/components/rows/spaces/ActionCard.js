import React from "react";

const ActionCard = props => {
  return (
    <div
      className={`space ${
        props.type === "chance" ? "chance" : "community-chest"
      }`}
    >
      <div className="container">
        {props.type === "chance" ? (
          <div className="name"> Chance</div>
        ) : (
          <div className="name"> Community Chest</div>
        )}
        {props.type === "chance" ? (
          <i className="drawing fas fa-question"></i>
        ) : (
          <i className="drawing fas fa-cube"></i>
        )}
        {props.type === "chance" ? null : (
          <div className="instructions">Follow instructions on top card</div>
        )}
      </div>
    </div>
  );
};

export default ActionCard;
