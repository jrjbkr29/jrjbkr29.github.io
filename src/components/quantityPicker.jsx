import React, { Component } from "react";

import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    quantity: 1,
    name: "Johnny",
  };
  render() {
    return (
      <div className="qp-page">
        <button
          id="decrementButton"
          className="btn btn-sm btn-info"
          onClick={this.decrease}
        >
          -
        </button>
        <label>{this.state.quantity}</label>
        <button
          id="incrementButton"
          className="btn btn-sm btn-info"
          onClick={this.increase}
        >
          +
        </button>

        {this.state.name}
      </div>
    );
  }

  increase = () => {
    console.log("Increase!!");
    this.setState({ quantity: this.state.quantity + 1 });
  };

  decrease = () => {
    console.log("Decrease!!");
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };
}

export default QuantityPicker;
