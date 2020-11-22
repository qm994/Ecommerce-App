
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.js';


const QuizInfo = () => <div>Quiz Info</div>
const NotFound = () => <h1>404.. This page is not found!</h1>

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;