import Level from "./interfaces/level";
import { stripIndents } from "common-tags";
export default [
  {
    grid: stripIndents`xxx
                       xxx`,
    duration: 20,
    set: "umbrella-star",
    identifiers: ["umbrella", "star"]
  }
] as Level[];
