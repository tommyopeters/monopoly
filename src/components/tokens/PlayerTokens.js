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
      className={`clone-of ${props.settings.row ? props.settings.row : null} ${
        props.settings.group
      }`}
      style={style}
    >
      <div className="clone-container">
        {props.settings.group === "property" ? (
          <div className="clone-houses"></div>
        ) : null}

        <div className="clone-players"></div>
        {props.settings.group === "property" ||
        props.settings.group === "utility" ||
        props.settings.group === "railroad" ? (
          <div className="clone-owner">
            {props.settings.owner ? <img src={PlayerToken} alt="" /> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PlayerTokens;
