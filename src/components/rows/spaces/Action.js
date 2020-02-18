import React from "react";
import Chance from "../../../assets/svgs/chance.svg";
import Chest from "../../../assets/svgs/chest.svg";

const ActionCard = props => {
  return (
    <div
      id={props.space.spaceId}
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
          <div className="drawing">
            <img src={Chance} alt="" />
          </div>
        ) : (
          <div className="drawing">
            <img src={Chest} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionCard;
