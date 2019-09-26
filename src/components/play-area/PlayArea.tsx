import React, { ComponentState } from "react";
// @ts-ignore
import parser from '../play-area/parser';
import levels from '../../levels';

class PlayArea extends React.Component<{}, ComponentState> {
    render() {
        return parser(levels[0].grid);
    }
}
export default PlayArea;