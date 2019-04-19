import React from 'react';
import { connect } from 'react-redux';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { calcTotal } from '../../utils';

import Logo from '../../assets/logo.png';


const Navbar = ({ cart }) => (
    <nav className="container">
        <div className="navbar">

            <img src={Logo} alt="logo" />
            <div className="navbar__icons">
                <span className="navbar__icons__cart">
                    <FaShoppingCart />
                    {
                        cart.length > 0
                        ? `£${calcTotal(cart)}`
                        : '£0.00'
                    }
                    { cart.length > 0 && <span>{cart.length}</span> }
                </span>
                <span className="navbar__icons__menu">
                    <FaBars />
                </span>
            </div>
        </div>
    </nav>
);

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Navbar);