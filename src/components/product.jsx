import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./product.css"

class Product extends Component {
  state = {  };
  render() {
    
    return (
      <div className="product">
          
        <img className="productImage" src={"/Images/products/" + this.props.data.image} alt="product" />
        <h6 className="title">{this.props.title}</h6>
        <label>${this.props.data.price}</label>
        <label>Total: $Product SubTotal</label>
        <QuantityPicker></QuantityPicker>

        
      </div>
    );
  }
}

export default Product;
