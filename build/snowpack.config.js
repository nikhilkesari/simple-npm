/** @type {import("snowpack").SnowpackUserConfig } */
const snowPackConfig = {
  mode: "production",
  workspaceRoot: "./packages/*",
  optimize: {
    bundle: true,
    minify: true,
    target: "es2018",
  },
};

module.exports = snowPackConfig;