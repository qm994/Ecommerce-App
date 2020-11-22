import React from 'react';
import SHOP_DATA from './shop-data';



class ShopPage extends React.Component {
    state = {
        collections: SHOP_DATA
    }
    render() {
        return (
            <div>Shop Page</div>
        )
    }
}

export default ShopPage;
