import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {

    return (
        <div class="group">
            {
                label
                ? <label 
                    // add dynamic shrink class to shrink labels
                    className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
                : null
            }
            <input className="form-input" onChange={handleChange} {...otherProps} />
        </div>
    )
}

export default FormInput;
