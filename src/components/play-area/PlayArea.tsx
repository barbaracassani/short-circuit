import React, { ComponentState } from "react";
// @ts-ignore
import parser from '../play-area/parser';
import levels from '../../levels';

class PlayArea extends React.Component<{}, ComponentState> {
    render() {
        return <div className="playfield">{parser(levels[0])}</div>;
    }
}
export default PlayArea;