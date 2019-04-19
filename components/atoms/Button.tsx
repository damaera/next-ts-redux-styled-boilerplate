import * as React from "react";
import styled from "../styledComponents";
import { connect } from "react-redux";
import { RootState } from "../../store";
import chroma from "chroma-js";

type ColorEnum = "red" | "yellow" | "blue" | "green" | "pink" | "grey";
export interface ButtonProps extends React.DOMAttributes<HTMLButtonElement> {
  fontColor?: ColorEnum;
  iconColor?: ColorEnum;
  background?: ColorEnum;
  isInvert?: boolean;
  isLast?: boolean;
  isBottom?: boolean;
  isDarkMode?: boolean;
  isUpperCase?: boolean;
  size?: "small" | "medium" | "big";
  className?: string;
  type?: "submit";
}

const StyledButton = styled.button<ButtonProps>`
  line-height: 1;
  position: relative;
`;

const mapStateToProps = (state: RootState) => {
  return {
    isDarkMode: state.app.isDarkMode
  };
};

export const Button = connect(mapStateToProps)((props: ButtonProps) => {
  return <StyledButton {...props} />;
});
