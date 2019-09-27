import React from "react";
import ReactDOM from "react-dom";
import parser from "../parser";
import Level from "../../../interfaces/level";
import { stripIndents } from "common-tags";

jest.mock("../../tile/Tile", () => {
  return {
    __esModule: true,
    default: (props: any) => {
      return <div {...props}></div>;
    }
  };
});

describe("the output of parser", () => {
  it("returns one tile", () => {
    const oneTile = `x`;
    expect(
      parser({
        grid: oneTile
      } as Level)
    ).toMatchSnapshot("one tile");
  });
  it("returns many tiles", () => {
    const manyTiles = stripIndents`xxx
                                   xxx`;
    expect(
      parser({
        grid: manyTiles
      } as Level)
    ).toMatchSnapshot("many tiles");
  });
});
