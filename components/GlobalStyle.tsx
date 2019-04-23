import { createGlobalStyle } from "./styledComponents";
import { connect } from "react-redux";
import { RootState } from "@/store";

export const Style = createGlobalStyle<{ isDarkMode: boolean }>`
  html, body {
    background: ${props => (props.isDarkMode ? "#000" : "#fff")};
    color: ${props => (props.isDarkMode ? "#fff" : "#000")};
  }
`;

const mapStateToProps = (state: RootState) => {
  return {
    isDarkMode: state.app.isDarkMode
  };
};

export const GlobalStyle = connect(mapStateToProps)(Style);
