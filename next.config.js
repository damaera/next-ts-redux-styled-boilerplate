require("dotenv").config();
const webpack = require("webpack");

const withTypescript = require("@zeit/next-typescript");
const withStyledIcons = require("next-plugin-styled-icons");
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");

const config = {
  webpack: config => {
    config.plugins = config.plugins || [];
    const env = new webpack.EnvironmentPlugin([
      "GITHUB_CLIENT_ID",
      "GITHUB_REDIRECT_URI",
      "NODE_ENV",
      "API_URI",
      "TEST"
    ]);

    config.plugins = [...config.plugins, env];

    return config;
  }
};

module.exports = withCSS(withImages(withTypescript(withStyledIcons(config))));
