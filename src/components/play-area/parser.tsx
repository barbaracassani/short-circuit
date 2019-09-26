import React from 'react';
import Level from '../../interfaces/level';
import Tile from '../../components/tile/Tile';

const UmbrellaStarSet: string = 'http://localhost:3000/sets/umbrella-star.svg';

const parser = (level: Level["grid"]) => {
    const url = UmbrellaStarSet;
    const identifier = 'umbrella';
    return (
      <Tile getCurrentState={() => {}} identifier={identifier}>
        <svg className={`icon icon-${identifier}`}>
            <use xlinkHref={`${url}#icon-${identifier}`} />
        </svg>
      </Tile>
    );
};

export default parser;