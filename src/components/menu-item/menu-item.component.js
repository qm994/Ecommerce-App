import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ( {title, id, imageUrl, size} ) => (
    <div 
        className={`${size} menu-item`}
        style={{ backgroundImage: `url(${imageUrl})` }}
        >
        <div class="content">
            <h1 class="title">{title}</h1>
            <span class="subtitle">shop now</span>
        </div>
    </div>

);

export default MenuItem