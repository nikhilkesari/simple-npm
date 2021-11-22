const plugins = [
  // ...
  [
    "snowpack-plugin-rollup-bundle",
    {
      entrypoints: ["build/packages/gtm", "build/packages/snowplow"],
    },
  ],
];
const snowPackConfig = {
  mode: "production",
  workspaceRoot: "./packages/*",
  plugins: plugins,
};

module.exports = snowPackConfig;