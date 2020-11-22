import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <Route exact path='/'>
        <HomePage />
      </Route>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);


