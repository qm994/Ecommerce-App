import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../../components/custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartDropdown = ({cartItems, history, dispatch}) => {
    console.log(cartItems)
    return (
        <div class="cart-dropdown">
            <div class="cart-items">
                {   
                    cartItems.length
                    ? cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                    : <span className='empty-message'>Your cart is empty!</span>
                }
            </div>
            <CustomButton 
                onClick={
                    () => {
                        history.push('/checkout');
                        dispatch(toggleCartHidden());
                    }
                }>
                Checkout!
            </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({ //or we can deconstruct { cart: { cartItems } }
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
