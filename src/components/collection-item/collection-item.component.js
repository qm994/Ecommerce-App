import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component'; 
const CollectionItem = ({ id, name, price, imageUrl }) => {
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
            <CustomButton inverted >
                Add to cart
            </CustomButton>
        </div>
    )
}

export default CollectionItem;
