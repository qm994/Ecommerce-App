import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component'; 

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
    const { id, name, price, imageUrl } = item;
    return (
        <div class="collection-item">
            <div 
            class="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}>

            </div>

            <div class="collection-footer">
                <span class="name">{name}</span>
                <span class="price">{price}</span>
            </div>
            <CustomButton collectionItemButton onClick={() => addItem(item)} inverted >
                Add to cart
            </CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
