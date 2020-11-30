import memoize from 'lodash.memoize';
import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

export const selectCollections = createSelector(
    selectShop,
    shop => shop.collections
)

// it will export the collection match the url id  from collections
export const selectCollection = memoize(collectionUrlParam => 
    createSelector(
        selectCollections,
        collections => collections[collectionUrlParam]
    )
)