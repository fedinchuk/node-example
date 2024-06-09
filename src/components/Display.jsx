import React from "react";

export default class Display extends React.Component {
  render() {
    return <h1>{this.props.count}</h1>;
  }
}
