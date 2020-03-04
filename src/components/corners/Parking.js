import React from "react";
import Car from "../../assets/svgs/parking.svg";

const Parking = () => {
  return (
    <div className="space corner free-parking" id={20}>
      <div className="container">
        <div className="name">Free</div>
        <div className="drawing">
          <img src={Car} alt="" />
        </div>
        <div className="name">Parking</div>
      </div>
    </div>
  );
};

export default Parking;
