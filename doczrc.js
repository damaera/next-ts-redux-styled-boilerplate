// doczrc.js
import { css } from "docz-plugin-css";

export default {
  title: "My Cool Project",
  description: "This is my awesome documentation",
  src: "./components/",
  wrapper: "../../components/DoczWrapper.tsx",
  typescript: true,
  port: 3333,
  codeSandbox: false,
  themeConfig: {
    colors: {
      primary: "tomato"
    }
  },
  plugins: [
    css({
      preprocessor: "postcss",
      cssmodules: true,
      loaderOpts: {
        /* whatever your preprocessor loader accept */
      }
    })
  ]
};
