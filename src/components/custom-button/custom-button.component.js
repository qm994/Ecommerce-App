import React, { Children } from 'react';
import './custom-button.styles.scss';


const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
    // children here represnt every between the open and closing brackets. for here is: `sign in`
    return (
        <button 
            className={
                `${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`
            } 
            {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;
