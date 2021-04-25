import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./product.css"

class Product extends Component {
  state = {
    productCount: 0,
    item1: {
        itemName: "Item1",
        price: "10.00" 
    },
    item2: {
        itemName: "Item2",
        price: "15.00" 
    },
    item3: {
        itemName: "Item3",
        price: "20.00" 
    },
    item4: {
        itemName: "Item4",
        price: "30.00" 
    },
    item5: {
        itemName: "Item5",
        price: "50.00" 
    },
    item6: {
        itemName: "Item1",
        price: "10.00" 
    },
    item7: {
        itemName: "Item1",
        price: "10.00" 
    },
    item8: {
        itemName: "Item1",
        price: "10.00" 
    },
    item9: {
        itemName: "Item1",
        price: "10.00" 
    },
    item10: {
        itemName: "Item1",
        price: "10.00" 
    }
  };
  render() {
    
    return (
      <div className="product">
          
        <img className="productImage" src="https://images.unsplash.com/photo-1540487240765-d6da97fefbfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="product" />
        <h6 className="title">{this.state.item1.itemName}</h6>
        <label>${this.state.item1.price}</label>
        <label>Total: $Product SubTotal</label>
        <QuantityPicker></QuantityPicker>

        
      </div>
    );
  }
}

export default Product;
