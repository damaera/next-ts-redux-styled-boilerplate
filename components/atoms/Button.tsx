import * as React from "react";
import styled from "../styledComponents";
import { connect } from "react-redux";
import { RootState } from "../../store";
import chroma from "chroma-js";

// type ColorEnum = "red" | "yellow" | "blue" | "green" | "pink" | "grey";
export interface ButtonProps extends React.DOMAttributes<HTMLButtonElement> {
  isDarkMode?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  line-height: 1;
  position: relative;
  padding: 10px 20px;
  border-radius: 6px;
  outline: none;
  border: none;
  background: ${props => (props.isDarkMode ? "#fff" : "#000")};
  color: ${props => (props.isDarkMode ? "#000" : "#fff")};
  font-weight: bold;
`;

const mapStateToProps = (state: RootState) => {
  return {
    isDarkMode: state.app.isDarkMode
  };
};

export const Button = connect(mapStateToProps)((props: ButtonProps) => {
  return <StyledButton {...props} />;
});
