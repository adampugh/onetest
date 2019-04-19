import React, { Component, Fragment } from 'react';

// request data from api to render products grid -> prob best within the component
// allow filtering of products
// setup redux to allow for adding of items 
// add router for product desc??
// add modal for mobile cart info
// fetch navbar data via redux


import Banner from '../../assets/banner.jpg';
import Navbar from '../UI/Navbar';
import Footer from '../UI/Footer';

import ProductsGrid from './ProductsGrid';

class ProductsPage extends Component {
    render() {
        return (
            <div className="productsPage">
                <Navbar />
                <img className="productsPage__banner" src={Banner} alt="banner" />
                <ProductsGrid />
                <Footer />
            </div>
        )
    }
}

export default ProductsPage;