import React, { ComponentState } from "react";
// @ts-ignore
import parser from '../play-area/parser';
import sizer from '../play-area/sizer';
import levels from '../../levels';

class PlayArea extends React.Component<{}, ComponentState> {
    render() {
        const {width, height} = sizer(levels[0]);
        const style = {
            width,
            height
        };
        return <div className="playfield" style={style}>{parser(levels[0])}</div>;
    }
}
export default PlayArea;