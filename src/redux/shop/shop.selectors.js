import memoize from 'lodash.memoize';
import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    selectShop,
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    selectCollections,
    collections => Object.keys(collections).map(key => collections[key])
)

// it will export the collection match the url id  from collections
export const selectCollection = memoize(collectionUrlParam => 
    createSelector(
        selectCollections,
        collections => collections[collectionUrlParam]
    )
)