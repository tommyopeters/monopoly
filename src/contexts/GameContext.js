import React, { Component, createContext } from "react";

import SpaceList from "../engine/SpaceList.json";

export const GameContext = createContext();

class GameContextProvider extends Component {
  state = {
    Game: {
      Players: [],
      SpaceList
    },
    SpaceCard: {
      display: false
    },
    SpacePositions: {}
  };

  setInitialPlayers = players => {
    let gameClone = this.state.Game;
    players.forEach(player => {
      gameClone.Players.push({
        id: gameClone.Players.length,
        name: player.name,
        icon: player.icon,
        color: player.color,
        properties: [],
        wallet: 1500,
        debt: 0,
        jailed: false,
        currentPosition: 0,
        finalPosition: 0
      });
    });

    this.setState({
      Game: gameClone
    });
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
      spaces[key] = {};
      if (key !== "board") {
        spaces[key].startX =
          spacePositions[key].x - spacePositions["board"].x - 2;
        spaces[key].startY =
          spacePositions[key].y - spacePositions["board"].y - 2;
        spaces[key].height = spacePositions[key].height;
        spaces[key].width = spacePositions[key].width;
        spaces[key].endX = spacePositions[key].x + spacePositions[key].width;
        spaces[key].endY = spacePositions[key].y + spacePositions[key].height;

        let extraInfo = this.state.Game.SpaceList.find(
          el => el.spaceId === key * 1
        );
        if (extraInfo) {
          spaces[key].group = extraInfo.group;
          if (
            extraInfo.group === "property" ||
            extraInfo.group === "railroad"
          ) {
            spaces[key].owner = extraInfo.owner;
            if (extraInfo.group === "property") {
              spaces[key].occupants = extraInfo.occupants;
              spaces[key].houses = extraInfo.houses;
            }
          }
        }
        if (1 <= key * 1 && key * 1 <= 9) {
          spaces[key].row = "bottom-row-clones";
        }
        if (11 <= key * 1 && key * 1 <= 19) {
          spaces[key].row = "left-row-clones";
        }
        if (21 <= key * 1 && key * 1 <= 29) {
          spaces[key].row = "top-row-clones";
        }
        if (31 <= key * 1 && key * 1 <= 39) {
          spaces[key].row = "right-row-clones";
        }
      } else {
        spaces[key] = spacePositions[key];
      }
    }
    this.setState({
      SpacePositions: spaces
    });
    console.log(spaces);
    console.log(this.state.SpacePositions);
  };
  removeSpaceCard = () => {
    this.setState({
      SpaceCard: {
        display: false
      }
    });
  };

  setPlayerPosition = (playerIndex, playerPosition) => {
    let gameClone = { ...this.state.Game };
    gameClone.Players[playerIndex].currentPosition = playerPosition;

    this.setState({
      Game: gameClone
    });
  };

  render() {
    return (
      <GameContext.Provider
        value={{
          ...this.state,
          setInitialPlayers: this.setInitialPlayers,
          setSpaceCard: this.setSpaceCard,
          removeSpaceCard: this.removeSpaceCard,
          setSpacePositions: this.setSpacePositions,
          setPlayerPosition: this.setPlayerPosition
        }}
      >
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export default GameContextProvider;
