import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./product.css"

class Product extends Component {
  state = {
    price: this.props.data.price
  };
  render() {

    return (
      <div className="product">
        <label className="titleLabel">{this.props.data.title}</label>
        <img className="productImage" src={"/Images/products/" + this.props.data.image} alt="product" />

        <label>Each: ${this.props.data.price}</label>
        <QuantityPicker price={this.props.data.price}></QuantityPicker>
      </div>
    );
  }
}

export default Product;
