import React from 'react';
import { connect } from 'react-redux';

 
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import{ selectCollection } from '../../redux/shop/shop.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CollectionPage = ({ match, collection }) => {
    console.log(match.params.collectionId)
    console.log(collection)

    const { title, items } = collection;
    return (
        <div class="collection-page">
            <h2 class="title">{title}</h2>
            <div class="items">
                {
                    items.map(
                        item => <CollectionItem key={item.id} item={item} />
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);