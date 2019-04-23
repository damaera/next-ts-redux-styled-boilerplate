import * as React from "react";
import { Header } from "@components/organisms/Header";
import { AppContext } from "@/types";

export interface AboutPageProps {
  query: {
    slug: string;
  };
}

export default class AboutPage extends React.Component<AboutPageProps, {}> {
  static async getInitialProps({ query, res }: AppContext) {
    return { query };
  }
  public render() {
    return (
      <div>
        <Header />
        <h1>About, query: q {this.props.query.slug}</h1>
      </div>
    );
  }
}
