import React from 'react';
import { connect } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { removeProduct } from '../../actions';
import { calcTotal } from '../../utils';


const Cart = ({ cart, removeProduct }) => (
    <div className="cart">
        <h1 className="cart__title">CART { cart.length > 0 && <span>{cart.length}</span> }</h1>
        {
            cart.length > 0 
                ? cart.map(({title, price, id}, i) => (
                    <div key={i} className="cart__product">
                        <span>{title}</span>
                        <span className="cart__product__price">£{price} <FaTrashAlt className="cart__product__trash" onClick={() => removeProduct(id)} /></span>
                        
                    </div>
                ))
                : <span className="cart__total__taxes">Cart is empty</span>
        }
        <div className="cart__total">
            <span>Total</span>
            <div>
                <span>
                    {
                        cart.length > 0
                            ? `£${calcTotal(cart)}`
                            : '£0.00'
                    }
                </span>
                <span className="cart__total__taxes">Inc. taxes</span>
            </div>
        </div>
    </div>
);

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, { removeProduct })(Cart);