import React, { Component } from 'react';
import Product from "./product";
import ProductService from '../services/productService';

class Catalog extends Component {
    state = {
        catalog: []
    }
    render() {
        return (
            <div className="catalog-page">
                <h1>Our Catalog</h1>

                <p>The are {this.state.catalog.length} products in the catalog.</p>

                <div className="products">
                    {this.state.catalog.map((item) => <Product key={item.id} data={item}></Product>)}
                </div>
            </div>
        );
    }

    componentDidMount() {
        // get data from the service
        var service = new ProductService();
        var catalog = service.getCatalog();
        this.setState({ catalog: catalog });
    }
}

export default Catalog;