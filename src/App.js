
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.js';
import Header from './components/header/header.component.js';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ContactPage from './pages/contact/contact.component';


import { auth, createUserProfileDocument, addCollectionAndDocuments } from '../src/firebase/firebase.utils';
import { selectCollections, selectCollectionsForPreview } from './redux/shop/shop.selectors';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

const NotFound = () => <h1>404.. This page is not found!</h1>

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    console.log(collectionsArray)
    // userAuth will be state currentUser
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        // means user signed in
        console.log(userAuth)
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          // get all Document Reference's snap shots
          userRef.onSnapshot(snapShot => {
            
            console.log(`Received doc snapshot: ${JSON.stringify(snapShot.data(), null, 4)}`)
            
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
        } else {
          setCurrentUser(userAuth) //userAuth is null here
          //addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })))
        }
      }
    )
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path= '/contact' component={ContactPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => 
            this.props.currentUser
            ? (<Redirect to='/' />)
            : (<SignInSignUpPage />)
            } />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App); // null here since App doesnt need the store except to set it