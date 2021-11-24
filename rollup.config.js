import { babel } from "@rollup/plugin-babel";
export default [
  {
    input: "./packages/gtm/src/index.js",
    output: {
      dir: "./packages/gtm/dist",
      format: "esm",
      name: "gtm",
    },
    plugins: [babel({ babelHelpers: "bundled" })],
  },
  {
    input: "./packages/snowplow/src/index.js",
    output: {
      dir: "./packages/snowplow/dist",
      format: "esm",
      name: "snowplow",
    },
    plugins: [babel({ babelHelpers: "bundled" })],
  },
];
