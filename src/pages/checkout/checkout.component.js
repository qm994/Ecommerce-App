import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total, ...otherProps}) => {
    return (
        <div className='checkout-page'>
            <div class="checkout-header">
                <div class="header-block">
                    <span>Product</span>
                </div>
                <div class="header-block">
                    <span>Description</span>
                </div>
                <div class="header-block">
                    <span>Quantity</span>
                </div>
                <div class="header-block">
                    <span>Price</span>
                </div>
                <div class="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <div class="total">
                <span>${total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps, null)(CheckoutPage);
