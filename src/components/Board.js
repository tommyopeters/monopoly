import React, { Component } from "react";
import TopRow from "./rows/TopRow";
import Parking from "./corners/Parking";
import GoToJail from "./corners/GoToJail";
import JustVisiting from "./corners/JustVisiting";
import Go from "./corners/Go";
import LeftRow from "./rows/LeftRow";
import RightRow from "./rows/RightRow";
import BottomRow from "./rows/BottomRow";
import Center from "./Center";

class Board extends Component {
  componentDidMount() {
    let leftRowSpaces = document.querySelectorAll(".left-row .space");
    let leftRowContainers = document.querySelectorAll(
      ".left-row .space .container"
    );

    leftRowContainers.forEach(el => {
      el.style.width = leftRowSpaces[0].offsetHeight + "px";
      el.style.height = leftRowSpaces[0].offsetWidth + "px";
    });

    let rightRowSpaces = document.querySelectorAll(".right-row .space");
    let rightRowContainers = document.querySelectorAll(
      ".right-row .space .container"
    );

    rightRowContainers.forEach(el => {
      el.style.width = rightRowSpaces[0].offsetHeight + "px";
      el.style.height = rightRowSpaces[0].offsetWidth + "px";
    });
  }
  render() {
    return (
      <div className="board">
        <Center />
        <Go />
        <BottomRow />
        <JustVisiting />
        <LeftRow />
        <Parking />
        <TopRow />
        <GoToJail />
        <RightRow />
      </div>
    );
  }
}

export default Board;
