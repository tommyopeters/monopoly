import React, { Component, createContext } from "react";
import SpaceList from "../engine/SpaceList.json";
import GameEngine from "../engine/Game";

export const GameContext = createContext();

class GameContextProvider extends Component {
  state = {
    Game: new GameEngine(SpaceList),
    SpaceCard: {
      display: false
    }
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
          removeSpaceCard: this.removeSpaceCard
        }}
      >
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameContextProvider;
