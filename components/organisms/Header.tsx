import styled from "../styledComponents";
import { Button } from "@components/atoms/Button";
import * as React from "react";

import { RootState } from "@/store";
import { connect } from "react-redux";

import routes from "@/routes";
const Link = routes.Link;

export interface HeaderProps {
  isDarkMode?: boolean;
  children?: React.ReactChild | React.ReactChild[];
}

class Wrapper extends React.Component<HeaderProps, {}> {
  render() {
    return (
      <div>
        Header <Button>Hello</Button>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    isDarkMode: state.app.isDarkMode
  };
};

export const Header = connect(mapStateToProps)(Wrapper);
