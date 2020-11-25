import React, { Children } from 'react';
import './custom-button.styles.scss';


const CustomButton = ({ children, ...otherProps }) => {
    // children here represnt every between the open and closing brackets. for here is: `sign in`
    return (
        <button class="custom-button" {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;
