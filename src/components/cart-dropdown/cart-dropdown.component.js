import React from 'react';

import CustomButton from '../../components/custom-button/custom-button.component';
import './cart-dropdown.styles.scss';


const CartDropdown = () => {
    return (
        <div class="cart-dropdown">
            <div class="cart-items">

            </div>
            <CustomButton>
                Checkout!
            </CustomButton>
        </div>
    )
}

export default CartDropdown;
