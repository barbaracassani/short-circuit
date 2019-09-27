import Level from "../../interfaces/level";
import config from "../../config";

export default (level: Level) => {
  const { grid } = level;
  const height = grid.split("\n").length * config.tileSize;
  const width = grid.split("\n")[0].length * config.tileSize;
  return {
    width,
    height
  };
};
