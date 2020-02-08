import React from "react";
import Police from "../../assets/svgs/police.svg";

const GoToJail = () => {
  return (
    <div className="space corner go-to-jail">
      <div class="container">
        <div class="name">Go To</div>
        <div className="drawing">
          <img src={Police} alt="" />
        </div>
        <div class="name">Jail</div>
      </div>
    </div>
  );
};

export default GoToJail;
