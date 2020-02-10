import React from "react";
import RedPlayer from "../assets/svgs/player-icon-red.svg";
import BluePlayer from "../assets/svgs/player-icon-blue.svg";
import YellowPlayer from "../assets/svgs/player-icon-yellow.svg";
import GreenPlayer from "../assets/svgs/player-icon-green.svg";
import OrangePlayer from "../assets/svgs/player-icon-orange.svg";
import PurplePlayer from "../assets/svgs/player-icon-purple.svg";

const Character = props => {
  return (
    <img
      src={
        props.color === "red"
          ? RedPlayer
          : props.color === "blue"
          ? BluePlayer
          : props.color === "yellow"
          ? YellowPlayer
          : props.color === "green"
          ? GreenPlayer
          : props.color === "orange"
          ? OrangePlayer
          : props.color === "purple"
          ? PurplePlayer
          : null
      }
      className={
        props.color === "red"
          ? RedPlayer
          : props.color === "blue"
          ? BluePlayer
          : props.color === "yellow"
          ? YellowPlayer
          : props.color === "green"
          ? GreenPlayer
          : props.color === "orange"
          ? OrangePlayer
          : props.color === "purple"
          ? PurplePlayer
          : null
      }
      alt="player-icon"
    />
  );
};

export default Character;
