import React from "react";

import PlayerToken from "../../assets/svgs/player-icon/player-icon.svg";

const PlayerTokens = props => {
  const style = {
    position: "absolute",
    top: props.settings.startY,
    left: props.settings.startX,
    height: props.settings.height,
    width: props.settings.width
  };

  return (
    <div
      id={`clone-of-${props.id}`}
      className={`clone-of ${props.settings.row ? props.settings.row : null}`}
      style={style}
    >
      <div className="clone-container">
        <div className="clone-houses"></div>
        <div className="clone-players"></div>
        <div className="clone-owner">
          {props.settings.owner ? <img src={PlayerToken} alt="" /> : null}
        </div>
      </div>
    </div>
  );
};

export default PlayerTokens;
