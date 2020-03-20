import React from "react";
import Arrow from "../../assets/svgs/go-arrow.svg";

const Go = props => {
  return (
    <div className="space corner go" id={props.space.spaceId}>
      <div className="container">
        <div className="instructions">Collect $200.00 salary as you pass</div>
        <div className="go-word">go</div>
      </div>
      <div className="arrow">
        <img src={Arrow} alt="" />
      </div>
    </div>
  );
};

export default Go;
