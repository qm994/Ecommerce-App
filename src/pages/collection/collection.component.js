import React from 'react';
import { connect } from 'react-redux';

 
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import{ selectCollection } from '../../redux/shop/shop.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CollectionPage = ({ match, collection }) => {
    console.log(match.params.collectionId)
    console.log(collection)
    return (
        <div class="collection-page">
            <h2>collection page</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);