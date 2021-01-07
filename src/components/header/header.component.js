import React from 'react';
import { connect } from 'react-redux'; // connect is a higher compo
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            
            <OptionsContainer>
                <OptionLink to='/shop'>Shop</OptionLink>
                {/* TODO: ADD THE URL FOR CONTACT AND BUILD THE PAGE */}
                <OptionLink to='/contact'>Contact</OptionLink>
                {
                    currentUser
                    // by passing div we transform Link to a div
                    ? <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                    : <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden
                ? null
                : <CartDropdown />
            }
        </HeaderContainer>
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
