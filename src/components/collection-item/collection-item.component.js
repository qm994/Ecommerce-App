import React from 'react';
import './collection-item.styles.scss';

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
        </div>
    )
}

export default CollectionItem;
