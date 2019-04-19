// import { AppContext } from "./../types";
import Cookies from "universal-cookie";
import Router from "next/router";
import { bindActionCreators, Store } from "redux";
import { NextContext } from "next";

import { RootState } from "../store/index";
import routes from "../routes";
import { Router as NextRoutesRouter } from "next-routes";

const router: NextRoutesRouter = routes.Router;

const IS_BROWSER = process.browser;
const WHITELISTED_PATHNAMES = ["/"];

interface AppContext extends NextContext {
  store: Store<RootState>;
}

const doRedirect = (ctx: AppContext, route: string) => {
  if (IS_BROWSER) {
    router.pushRoute(route);
  } else {
    ctx.res.writeHead(302, {
      Location: route
    });
    ctx.res.end();
  }
};

export const redirectAuth = async (ctx: AppContext, cookies: Cookies) => {
  const token = cookies.get("token");

  if (token) {
    doRedirect(ctx, "/home");
  } else {
    // if pathname is not whitelisted when not login
    if (ctx.pathname !== "/" && !WHITELISTED_PATHNAMES.includes(ctx.pathname)) {
      doRedirect(ctx, "/");
    }
  }
};
