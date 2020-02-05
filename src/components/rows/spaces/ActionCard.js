import React from "react";

const ActionCard = props => {
  return (
    <div
      className={`space ${
        props.space.type === "chance" ? "chance" : "community-chest"
      }`}
    >
      <div className="container">
        {props.space.type === "chance" ? (
          <div className="name"> Chance</div>
        ) : (
          <div className="name"> Community Chest</div>
        )}
        {props.space.type === "chance" ? (
          <i className="drawing fas fa-question"></i>
        ) : (
          <i className="drawing fas fa-cube"></i>
        )}
        {props.space.type === "chance" ? null : (
          <div className="instructions">Follow instructions on top card</div>
        )}
      </div>
    </div>
  );
};

export default ActionCard;
