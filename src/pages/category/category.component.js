import React from 'react';
import './category.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';


// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

const CategoryPage = ({ match }) => {
    console.log(match)
    return (
        <div class="category">
            <h2>Catgory</h2>
        </div>
    )
}

export default CategoryPage;