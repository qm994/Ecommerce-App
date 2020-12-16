import React from 'react';
import CartItem from '../cart-item.component';
import { shallow } from 'enzyme';

const initialProp = {
    id: 1,
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    name: "Brown Brim",
    price: 25
}

describe('expect to match the CartItem', () => {
    it('it can find the CartItem', () => {
        const wrapper = shallow(<CartItem item={initialProp} />);
        expect(wrapper).toMatchSnapshot(); 
    })
});