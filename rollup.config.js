
export default [
  {
    input: "./packages/gtm/src/index.js",
    output: {
      dir: "./packages/gtm/dist",
      format: "esm",
      name: "gtm",
    },
  },
  {
    input: "./packages/snowplow/src/index.js",
    output: {
      dir: "./packages/snowplow/dist",
      format: "esm",
      name: "snowplow",
    },
  },
];