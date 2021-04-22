import React, { Component } from 'react';

class QuantityPicker extends Component {
    state = { 
        quantity: 1,
        name: "Johnny",
     }
    render() { 
        return (
            <div>
                <button id="decrementButton">-</button>
                <label>{this.state.quantity}</label>
                <button id="incrementButton" onClick={this.increase}>+</button>

                {this.state.name}
            </div>
          );
    }

    increase = () => {
        console.log("Increase!!");
        
        this.setState({quantity: 2});
      }

}
 
export default QuantityPicker;