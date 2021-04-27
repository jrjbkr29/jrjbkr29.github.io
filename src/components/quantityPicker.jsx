import React, { Component } from "react";

import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    quantity: 1,
    buttonLabel: "Add to cart"
  };
  render() {
    return (
      <div className="qp-page">
        <div>
        <label>Total: ${this.state.quantity * this.props.price}</label>
        </div>
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

        {this.state.buttonLabel}
        <button className="cartButton"><i className="fa fa-cart-plus" aria-hidden="true"></i></button>
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
