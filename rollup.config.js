import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [nodeResolve({"exportConditions":["module"],"moduleDirectories":["packages"]})],
};
