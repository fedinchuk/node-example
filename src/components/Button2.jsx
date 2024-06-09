import React from "react";

export default class Button2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textButton: props.initialText || "Натисни мене" };
  }

  clickButton = () => {
    this.setState(() => ({ textButton: "Кнопку натиснуто" }));
  };

  render() {
    return <button onClick={this.clickButton}>{this.state.textButton}</button>;
  }
}
