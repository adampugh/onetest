import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../actions';
import Modal from 'react-responsive-modal';

class Product extends Component {
    state = {
        open: false,
    };
     
    onOpenModal = () => {
        this.setState({ open: true });
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { title, img, price, id, addProduct } = this.props;
        const { open } = this.state;

        return (
            <div className="product">
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div className="product__modal">
                        <img src={img} alt={title} />
                    </div>
                </Modal>
                <div className="product__img">
                    <img src={img} alt="product" />
                </div>
                <div className="product__info">
                    <div>{title}</div>
                    <div className="product__info__price">£{price}</div>
                </div>
                <div className="product__buttons__wrapper">
                    <div className="product__buttons">
                        <button onClick={() => addProduct({ title, price, id })} className="btn">Add to cart</button>
                        <button onClick={this.onOpenModal} className="btn btn--grey">Quick view</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { addProduct })(Product);