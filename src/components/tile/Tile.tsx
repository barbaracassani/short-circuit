import React, { ComponentState } from "react";

interface TileProps {
  children: JSX.Element | JSX.Element[];
  getCurrentState: (state: ComponentState) => void;
  identifier: string;
}

class Tile extends React.Component<TileProps, ComponentState> {
  constructor(props: TileProps) {
    super(props);
    this.state = {
      blank: true
    };
    this.toggleState = this.toggleState.bind(this);
  }

  getCurrentState() {
    this.props.getCurrentState(this.state);
  }

  toggleState() {
    this.setState({
      blank: !this.state.blank
    })
  }

  render() {
    return <><button onClick={this.toggleState}>Tile{this.props.children}</button></>;
  }
}

export default Tile;