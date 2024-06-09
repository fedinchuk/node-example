import React from "react";

export default class TemperatureConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { c: 0, f: 32 };
  }

  fahrenheit = (e) => {
    this.setState({ c: e.target.value });
    this.setState((prevState) => ({ f: prevState.c * 1.8 + 32 }));
  };

  render() {
    return (
      <>
        <form>
          <label>Температура в градусах Цельсія: </label>
          <input
            type="number"
            min="0"
            max="100"
            onChange={this.fahrenheit}
            value={this.state.c}
          />
        </form>
        <p>Температура в градусах Фаренгейта: {this.state.f}</p>
      </>
    );
  }
}
