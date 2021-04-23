import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./product.css"

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="product">
        <img className="productImage" src="https://picsum.photos/300/400" alt="product" />
        <h6 className="title">Title of the product</h6>
        <label>$10.00</label>
        <label>$10.00</label>

        <QuantityPicker></QuantityPicker>

        <button className="btn btn-sm btn-primary"><i className="fa fa-cart-plus" aria-hidden="true"></i></button>
      </div>
    );
  }
}

export default Product;
