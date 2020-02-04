import React from "react";
import TopRow from "./rows/TopRow";
import Parking from "./corners/Parking";
import GoToJail from "./corners/GoToJail";
import JustVisiting from "./corners/JustVisiting";
import Go from "./corners/Go";
import LeftRow from "./rows/LeftRow";
import RightRow from "./rows/RightRow";
import BottomRow from "./rows/BottomRow";
import Center from "./Center";

const Board = () => {
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
};

export default Board;
