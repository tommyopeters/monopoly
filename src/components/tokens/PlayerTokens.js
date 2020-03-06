import React from "react";

const PlayerTokens = props => {
  const style = {
    position: "absolute",
    height: props.settings.height,
    width: props.settings.width,
    top: props.settings.y,
    left: props.settings.x
  };
  return <div id={`clone-of-${props.id}`} style={style}></div>;
};

export default PlayerTokens;
