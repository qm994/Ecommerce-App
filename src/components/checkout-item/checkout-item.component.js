import React from 'react';
import './checkout-item.styles.scss';


const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {

    return (
        <div class="checkout-item">
            <div class="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span class="name">{name}</span>
            <span class="quantity">{quantity}</span>
            <span class="price">{price}</span>
            <div class="remove-button">&#10005;</div>
        </div>
    )
}

export default CheckoutItem;