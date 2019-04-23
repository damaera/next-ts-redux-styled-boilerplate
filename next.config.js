require("dotenv").config();
const webpack = require("webpack");
const path = require("path");

const withTypescript = require("@zeit/next-typescript");
const withStyledIcons = require("next-plugin-styled-icons");
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");

const config = {
  webpack: config => {
    config.plugins = config.plugins || [];
    const env = new webpack.EnvironmentPlugin(["NODE_ENV", "API_URI", "TEST"]);

    config.plugins = [...config.plugins, env];

    config.resolve.alias["@components"] = path.join(__dirname, "components");
    config.resolve.alias["@lib"] = path.join(__dirname, "lib");
    config.resolve.alias["@pages"] = path.join(__dirname, "pages");
    config.resolve.alias["@static"] = path.join(__dirname, "static");
    config.resolve.alias["@store"] = path.join(__dirname, "store");
    config.resolve.alias["@"] = path.join(__dirname, "");

    return config;
  }
};

module.exports = withCSS(withImages(withTypescript(withStyledIcons(config))));
