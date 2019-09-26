import React from 'react';
import Level from '../../interfaces/level';
import Tile from '../../components/tile/Tile';

const UmbrellaStarSet: string = '../../sets/umbrella-star.svg';

const parser = (level: Level["grid"]) => {
    const url = UmbrellaStarSet;
    const identifier = 'umbrella';
    return (
      <Tile getCurrentState={() => {}} identifier={identifier}>
        <svg viewBox='0 0 16 16' className={`icon icon-${identifier}`}>
            <use xlinkHref={`${url}#icon-${identifier}`} />
        </svg>
      </Tile>
    );
};

export default parser;