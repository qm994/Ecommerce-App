import React from 'react';
import { connect } from 'react-redux'; // connect is a higher compo
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';
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
                <OptionLink to='/shop'>Contact</OptionLink>
                {
                    currentUser
                    ? <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
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
