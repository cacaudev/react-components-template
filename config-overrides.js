const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = function override(config, env) {
  config.resolve.plugins.push(new TsconfigPathsPlugin());
  return config;
};
