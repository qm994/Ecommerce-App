import React, { Children } from 'react';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => {
    // children here represnt every between the open and closing brackets. for here is: `sign in`
    return (
        <CustomButtonContainer {...props}>
             {children}
        </CustomButtonContainer>
    )
}

export default CustomButton;
