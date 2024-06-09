import React from "react";
import Display from "./Display";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div>
        {/* <Display count={this.state.count} /> */}
        {/* <button onClick={this.incrementCount}>+ 1</button> */}
        {/* <button onClick={this.decrementCount}>- 1</button> */}
      </div>
    );
  }
}
