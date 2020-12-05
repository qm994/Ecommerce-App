import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

export const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return (
        isLoading
        ? 
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
        :
        <WrappedComponent {...otherProps} />
    )
}

