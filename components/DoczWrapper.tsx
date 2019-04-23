import * as React from "react";
import "sanitize.css";
import { ThemeProvider } from "./styledComponents";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Provider } from "react-redux";
import { initStore } from "@/store";

interface Props {
  children: React.ReactChild;
}

const store = initStore();

const DoczWrapper = (props: Props) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        {props.children}
      </div>
    </ThemeProvider>
  </Provider>
);

export default DoczWrapper;
