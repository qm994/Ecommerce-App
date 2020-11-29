import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';


import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total, ...otherProps}) => {
    console.log(otherProps)
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
                    cartItem.name
                )
            }
            <div class="total">
                <span>{total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps, null)(CheckoutPage);
