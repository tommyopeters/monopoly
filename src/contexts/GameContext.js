import React, { Component, createContext } from "react";
import SpaceList from "../engine/SpaceList.json";

export const GameContext = createContext();

class GameContextProvider extends Component {
  state = {
    SpaceList
  };

  render() {
    return (
      <GameContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameContextProvider;
