import React from 'react';
import SHOP_DATA from './shop-data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';



class ShopPage extends React.Component {
    state = {
        collections: SHOP_DATA
    }
    render() {

        let collections = this.state.collections;

        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;
