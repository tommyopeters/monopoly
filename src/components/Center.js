import React from "react";
import Chance from "../assets/svgs/chance-white.svg";
import Chest from "../assets/svgs/chest.svg";

const Center = () => {
  return (
    <div className="center">
      <div className="community-chest-deck">
        <h2 className="label">Community Chest</h2>
        <div className="deck">
          <div className="card-box card-blue">
            <div className="card-blue-inside">
              <img src={Chest} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="title-box">
        <span className="title">MONOPOLY</span>
      </div>
      <div className="chance-deck">
        <h2 className="label">Chance</h2>
        <div className="deck">
          <div className="card-box card-orange">
            <div className="card-orange-inside">
              <img src={Chance} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
