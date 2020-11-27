import React from 'react';
import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
    return (
        <div class="cart-icon">
            <ShoppingIcon className='shopping-icon' />
            <span class="item-icon">0</span>
        </div>
    )
};

export default CartIcon;