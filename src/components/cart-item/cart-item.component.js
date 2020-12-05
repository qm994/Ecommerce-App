import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <div class="cart-item">
            <img src={imageUrl}  alt='item' />
            <div class="item-details">
                <span class="name">{name}</span>
                <span class="price">
                    {quantity} * ${price}
                </span>
            </div>
        </div>
    )
}

export default CartItem;