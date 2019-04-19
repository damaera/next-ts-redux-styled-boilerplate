import withRedux from "next-redux-wrapper";
import App, { Container, NextAppContext } from "next/app";
import Cookies from "universal-cookie";

import * as React from "react";
import { Provider } from "react-redux";
import { Store } from "redux";

import "sanitize.css";

import { GlobalStyle } from "../components/GlobalStyle";
import { ThemeProvider } from "../components/styledComponents";
import { theme } from "../components/theme";
import { initStore, RootState } from "../store";

import NProgress from "next-nprogress/component";
import routes from "../routes";
import { Router as NextRoutesRouter } from "next-routes";

import { redirectAuth } from "../lib/auth";

const router: NextRoutesRouter = routes.Router;
const IS_BROWSER = process.browser;

if (IS_BROWSER) {
  const Webfont = require("webfontloader");
  Webfont.load({
    google: {
      families: ["Nunito Sans:400,700", "Roboto Mono:400,400i,700,700i"]
    }
  });
}

interface AppContext {
  store: Store<RootState>;
  cookies: Cookies;
}

export default withRedux(initStore)(
  class MyApp extends App<AppContext> {
    // tslint:disable-next-line:no-any
    static async getInitialProps({ Component, ctx }: any) {
      let pageProps = {};

      let cookies: undefined | Cookies;
      if (IS_BROWSER) {
        cookies = new Cookies();
      } else {
        cookies = new Cookies(ctx.req.headers.cookie);
      }
      await redirectAuth(ctx, cookies);

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      return { pageProps, cookies };
    }

    render() {
      const { Component, pageProps, store, cookies } = this.props;
      return (
        <Container>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <div>
                <GlobalStyle />
                <NProgress options={{ showSpinner: false }} />
                <Component {...pageProps} cookies={cookies} />
              </div>
            </ThemeProvider>
          </Provider>
        </Container>
      );
    }
  }
);
