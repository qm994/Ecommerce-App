import React from 'react';
import { Route } from 'react-router-dom';

import CategoryPage from '../category/category.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const NotFound = () => <h1>404.. This page is not found!</h1>

const ShopPage = ({match}) => {
    console.log(match)
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
        </div>
    )
}


export default ShopPage;
