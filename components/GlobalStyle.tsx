import { createGlobalStyle } from "./styledComponents";
import { connect } from "react-redux";
import { RootState } from "../store";

export const Style = createGlobalStyle<{ isDarkMode: boolean }>`
  

`;

const mapStateToProps = (state: RootState) => {
  return {
    isDarkMode: state.app.isDarkMode
  };
};

export const GlobalStyle = connect(mapStateToProps)(Style);
