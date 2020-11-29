import React from 'react';
import { connect } from 'react-redux'; // connect is a higher compo
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hidden }) => {
    return (
        <div class="header">
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            
            <div class="options">
                <Link className="option" to='/shop'>Shop</Link>
                <Link className="option" to='/shop'>Contact</Link>
                {
                    currentUser
                    ? <div class="option" onClick={() => auth.signOut()}> SIGN OUT</div>
                    : <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                hidden
                ? null
                : <CartDropdown />
            }
        </div>
    )
}


// state is the root reducer?
// createStructuredSelector will pass the `state` to the seletors and return the object
// with keys: currentUser, hidden
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
