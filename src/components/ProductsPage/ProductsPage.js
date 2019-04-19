import React, { Component } from 'react';

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