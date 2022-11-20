import React, { Component } from "react";

export default class HoverCount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Count: {this.state.count}</h2>
        <button onMouseOver={this.incrementHandler}>increment</button>
      </>
    );
  }
}
