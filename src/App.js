
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.js';
import Header from './components/header/header.component.js';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.utils';


const NotFound = () => <h1>404.. This page is not found!</h1>

class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // userAuth will be state currentUser
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        // means user signed in
        console.log(userAuth)
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          // get all Document Reference's snap shots
          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }, () => {
              console.log(`the state if userAuth is not null`)
              console.log(this.state)
            })
          })
        } else {
          this.setState({currentUser: userAuth}) //userAuth is null here
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
        <Header currentUser={this.state.currentUser}/>
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

export default App;