import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
    return (
        <div class="header">
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            
            <div class="options">
                <Link className="option" to='/shop'>Shop</Link>
                <Link className="option" to='/shop'>Contact</Link>
            </div>
        </div>
    )
}

export default Header;
