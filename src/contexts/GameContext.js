import React, { Component, createContext } from "react";
import SpaceList from "../engine/SpaceList.json";
import GameEngine from "../engine/Game";

export const GameContext = createContext();

class GameContextProvider extends Component {
  state = {
    Game: new GameEngine(SpaceList),
    SpaceCard: {
      display: false
    },
    SpacePositions: {}
  };

  setSpaceCard = space => {
    space *= 1;
    this.setState({
      SpaceCard: {
        display: true,
        space: this.state.Game.SpaceList.find(el => el.spaceId === space)
      }
    });
  };
  setSpacePositions = spacePositions => {
    let spaces = this.state.SpacePositions;
    for (let key in spacePositions) {
      spaces[key] = spacePositions[key];
    }
    this.setState({
      SpacePositions: spaces
    });

    console.log(this.state.SpacePositions);
  };
  removeSpaceCard = () => {
    this.setState({
      SpaceCard: {
        display: false
      }
    });
  };

  render() {
    return (
      <GameContext.Provider
        value={{
          ...this.state,
          setSpaceCard: this.setSpaceCard,
          removeSpaceCard: this.removeSpaceCard,
          setSpacePositions: this.setSpacePositions
        }}
      >
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameContextProvider;
