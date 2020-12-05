import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ( {title, id, imageUrl, size, linkUrl, history, match} ) => {
    // console.log(match)
    // console.log(linkUrl)
    return (
        <div 
            className={`${size} menu-item`}
            // onclick then push the url to histo
            onClick={() => {history.push(`${match.url}${linkUrl}`)}}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">shop now</span>
            </div>
        </div>
    )

};

// withRouter is a higher order function component;
// it take in a component and enhance it with new func
// Doc explanation: You can get access to the history object’s properties and the closest <Route>'s match via the withRouter higher-order component.
// withRouter will pass updated match,
// location, and history props to the wrapped component whenever it renders.
export default withRouter(MenuItem)