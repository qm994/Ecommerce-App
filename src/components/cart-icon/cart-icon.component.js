import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, cartItems }) => {
    return (
        <div class="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span class="item-icon">0</span>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({ cart: {cartItems} }) => ({
    cartItems
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);