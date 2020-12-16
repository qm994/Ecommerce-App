import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CartDropdown from '../cart-dropdown.component';
import CustomButton from '../../../components/custom-button/custom-button.component';

describe('expect to render CartDropDown', () => {
    it('it can find the button in dropdown', () => {
        const wrapper = shallow(<CartDropdown />);
        expect(wrapper.find(<CustomButton />)).toBeTruthy; 
    })
});


