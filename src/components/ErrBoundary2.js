import React, { Component } from "react";

export default class ErrBoundary2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error: error,
    };
  }

  render() {
    if (this.state.error) {
      return (
        <h2 style={{ color: "red", textTransform: "capitalize" }}>
          something went wrong
        </h2>
      );
    }
    return this.props.children;
  }
}
