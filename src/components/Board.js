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
import { GameContext } from "../contexts/GameContext";
import SpaceCard from "./SpaceCard";
import TokenContainer from "./TokenContainer";

class Board extends Component {
  static contextType = GameContext;
  componentDidMount() {
    //---------------------------------------------------------------------DOM Definitions
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

    let allSpaces = document.querySelectorAll(".space");

    allSpaces.forEach(space => {
      if (!space.classList.contains("corner")) {
        space.addEventListener("click", e => {
          if (space === e.target || space.contains(e.target)) {
            this.context.setSpaceCard(space.id);
          }
        });
      }
    });
    //----------------------------------------------------------------End of DOM Definitions

    //-----------------------------------------------------------------First instance of setting Space Positions
    let board = document.querySelector(".board");
    let boardDetails = board.getBoundingClientRect();
    let spacePositions = {};
    spacePositions["board"] = boardDetails.toJSON();
    allSpaces.forEach(space => {
      spacePositions[space.id] = space.getBoundingClientRect().toJSON();
    });
    this.context.setSpacePositions(spacePositions);

    //---------------------------------------------------------------------Consequent Instances
    window.addEventListener("resize", e => {
      let board = document.querySelector(".board");
      let boardDetails = board.getBoundingClientRect();
      let spacePositions = {};
      spacePositions["board"] = boardDetails.toJSON();
      allSpaces.forEach(space => {
        spacePositions[space.id] = space.getBoundingClientRect().toJSON();
      });
      this.context.setSpacePositions(spacePositions);
    });

    // START GAMEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!---------------------------------------------------
    this.context.setInitialPlayers([
      {
        name: "Tommy",
        icon: "knight",
        color: "red"
      },
      {
        name: "David",
        icon: "pawn",
        color: "blue"
      }
    ]);

    this.context.setPlayerPosition(0, 3);
    console.log(this.context);
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
        {this.context.SpaceCard.display ? <SpaceCard /> : null}
        <TokenContainer />
      </div>
    );
  }
}

export default Board;
