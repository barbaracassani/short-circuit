import Level from "../../interfaces/level";
import config from "../../config";

export default (level: Level) => {
  const { grid } = level;
  const height = grid.split("\n").length * (config.tileSize + config.tilePadding);
  const width = grid.split("\n")[0].length * (config.tileSize + config.tilePadding);
  return {
    width,
    height
  };
};
