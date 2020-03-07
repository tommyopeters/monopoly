import React from "react";

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
      class={`clone-of ${props.settings.row ? props.settings.row : null}`}
      style={style}
    >
      <div className="clone-houses"></div>
      <div className="clone-players"></div>
    </div>
  );
};

export default PlayerTokens;
