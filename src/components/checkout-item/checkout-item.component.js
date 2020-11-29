import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
        <div class="checkout-item">
            <div class="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span class="name">{name}</span>
            <span class="quantity">
                <div class="arrow" onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div class="arrow" onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span class="price">{price}</span>
            <div class="remove-button" onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))

})

export default connect(null, mapDispatchToProps)(CheckoutItem);