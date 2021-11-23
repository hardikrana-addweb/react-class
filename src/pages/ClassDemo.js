
import React from "react";

class ClassDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: false,
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.showButton = this.showButton.bind(this);
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  showButton() {
    this.setState({ showChild: !this.state.showChild });
  }
  render() {
    return (
      <>
        <input
          type="checkbox"
          checked={this.state.showChild}
          onChange={this.showButton}
        />{" "}
        show button
        {this.state.showChild && (
          <button onClick={this.increment}>{this.state.counter}</button>
        )}
      </>
    );
  }
}

export default ClassDemo;
