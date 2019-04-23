import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Button, Container } from "@components/atoms";
import { Header } from "@components/organisms";
import { RootState } from "@store/index";
import { appToggleDarkMode } from "@store/App";
import { counterIncrement } from "@store/Counter";
import { AppContext } from "@/types";

import routes from "@/routes";
import { BaseAction } from "@store/utils";
const Link = routes.Link;
export interface IndexProps {
  counter: number;
  isDarkMode: boolean;
  loading: boolean;

  authGithub: (githubOAuthCode: string) => void;
  counterIncrement: (amount?: number) => void;
  counterIncrementAsync: () => void;
  appToggleDarkMode: () => void;
}

export interface IndexState {}
class Index extends React.Component<IndexProps, IndexState> {
  static async getInitialProps({ req }: AppContext) {
    return {};
  }

  public render() {
    return (
      <div>
        <Header />
        <Container flex>
          `
          <div style={{ flex: 1 }} className="hide-tablet">
            <h2>{this.props.isDarkMode ? "darkmode" : "lightmode"}</h2>
            <br />
            <br />
            <Button onClick={() => this.props.appToggleDarkMode()}>
              Toggle dark mode
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    counter: state.counter.count,
    isDarkMode: state.app.isDarkMode
  };
};

const mapDispatchToProps = (dispatch: Dispatch<BaseAction>) => {
  return {
    counterIncrement: bindActionCreators(counterIncrement, dispatch),
    appToggleDarkMode: bindActionCreators(appToggleDarkMode, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
