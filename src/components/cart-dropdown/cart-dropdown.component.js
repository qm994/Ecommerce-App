import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../../components/custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({cartItems}) => {
    return (
        <div class="cart-dropdown">
            <div class="cart-items">
                {
                    cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                }
            </div>
            <CustomButton>
                Checkout!
            </CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({ //or we can deconstruct { cart: { cartItems } }
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps, null)(CartDropdown);
