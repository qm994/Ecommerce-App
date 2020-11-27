
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.js';
import Header from './components/header/header.component.js';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';

const NotFound = () => <h1>404.. This page is not found!</h1>

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // userAuth will be state currentUser
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        // means user signed in
        console.log(userAuth)
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          // get all Document Reference's snap shots
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
        } else {
          setCurrentUser(userAuth) //userAuth is null here
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
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App); // null here since App doesnt need the store except to set it