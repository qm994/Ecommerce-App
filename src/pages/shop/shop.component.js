import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { WithSpinner } from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, isCollectionFetching, isCollectionLoaded } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}
                />
                <Route path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  });

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionsLoaded
})
  
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
  
