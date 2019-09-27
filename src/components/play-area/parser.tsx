import React from "react";

import config from '../../config';

import Level from "../../interfaces/level";
import Tile from "../../components/tile/Tile";

interface Sets {
  [index: string]: string;
}

const sets: Sets = {
  UmbrellaStarSet: "http://localhost:3000/sets/umbrella-star.svg"
};

const iterateGrid = (levelGrid: Level["grid"]): (JSX.Element|null)[] => {
  const url = sets.UmbrellaStarSet;
  const identifier = "umbrella";

  const splitString = levelGrid.split("");
  const tileSize = config.tileSize;
  let y = 0;
  let x = -tileSize;
  return splitString.map((char: string, index: number) => {
    x += tileSize;
    if (char === "\n") {
      y += tileSize;
      x = -tileSize;
      return null;
    } else {
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
  const url = sets.UmbrellaStarSet;
  const identifier = "umbrella";
  return iterateGrid(level.grid);
};

export default parser;
