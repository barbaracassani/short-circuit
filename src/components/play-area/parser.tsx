import React from "react";

import config from '../../config';

import Level from "../../interfaces/level";
import Tile from "../../components/tile/Tile";
import TilePicker from './Tile-picker';

interface Sets {
  [index: string]: string;
}

const sets: Sets = {
  UmbrellaStarSet: "http://localhost:3000/sets/umbrella-star.svg"
};

const iterateGrid = (level: Level): (JSX.Element|null)[] => {

  const { grid } = level;
  const url = sets.UmbrellaStarSet;

  const splitString = grid.split("");
  const totalTileSize = config.tileSize + config.tilePadding;
  let y = 0;
  let x = -totalTileSize;

  const picker = new TilePicker(level);

  return splitString.map((char: string, index: number) => {
    x += totalTileSize;
    if (char === "\n") {
      y += totalTileSize;
      x = -totalTileSize;
      return null;
    } else {
        const identifier = picker.sendTile();
        return (
            <Tile
                xPos={x}
                yPos={y}
                key={index}
                getCurrentState={() => {}}
                identifier={identifier}
            >
                <svg className={`icon icon-${identifier}`}>
                    <use xlinkHref={`${url}#icon-${identifier}`} />
                </svg>
            </Tile>
        );
    }

  });
};

const parser = (level: Level) => {
  return iterateGrid(level);
};

export default parser;
