import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div class="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span class="item-icon">{itemCount}</span>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({ cart: {cartItems} }) => ({
    itemCount: cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
        0
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);