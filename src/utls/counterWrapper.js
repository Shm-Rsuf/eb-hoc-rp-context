import React from "react";

const CounterWrapper = (oldComponent) => {
  class NewComponent extends React.Component {
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
      return <oldComponent />;
    }
  }
};
