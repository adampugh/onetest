import React, { Component } from 'react';
import axios from 'axios';

import Product from './Product';
import Cart from './Cart';
import Spinner from '../UI/Spinner';

class ProductsGrid extends Component {
    state = {
        products: [],
        loading: true
    }

    componentDidMount() {
        axios.get('https://j-parre.myshopify.com/products.json')
            .then(response => {
                const products = response.data.products.map(({title, images, variants, id}) => ({
                    title,
                    id,
                    img: images[0].src,
                    price: variants[0].price
                    
                }));
                this.setState({ products, loading: false });
            }).catch((error) => {
                console.log(error);
            });
    }

    sortAZ = (reverse) => {
        let sorted = [...this.state.products];
        let sortedProducts = sorted.sort((a,b) => {
            let textA = a.title.toUpperCase();
            let textB = b.title.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        if (reverse) {
            sortedProducts = sortedProducts.reverse();
        }
        this.setState({
            products: sortedProducts
        })
    }

    sortPrice = (reverse) => {
        let sorted = [...this.state.products];
        let sortedProducts = sorted.sort((a,b) => {
            let priceA = a.price;
            let priceB = b.price;
            return (priceA < priceB) ? -1 : (priceA > priceB) ? 1 : 0;
        });
        if (reverse) {
            sortedProducts = sortedProducts.reverse();
        }
        this.setState({
            products: sortedProducts
        })
    }


    render() {
        const { products, loading } = this.state;

        if (loading) {
            return <Spinner />
                
        }

        return (
            <div className="container">
                <div className="productsGrid__buttons">
                        <button className="btn btn--grey" onClick={() => this.sortAZ(false)}>Title A-Z</button>
                        <button className="btn btn--grey" onClick={() => this.sortAZ(true)}>Title Z-A</button>
                        <button className="btn btn--grey" onClick={() => this.sortPrice(true)}>Price High-Low</button>
                        <button className="btn btn--grey" onClick={() => this.sortPrice(false)}>Title Low-High</button>
                    </div>
                <div className="productsGrid">
                    <div className="productsGrid__products">
                        {
                            products.map(({title, img, price, id}) => (
                                <Product 
                                    key={id}
                                    title={title} 
                                    img={img} 
                                    price={price}
                                    id={id}
                                />
                            ))
                        }
                    </div>
                    <div className="productsGrid__cart">
                        <Cart />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductsGrid;