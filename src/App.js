import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/login';
import Account from './components/account';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Login} />
        <Route path="/account" component={Account} /> 
      </div>
    );
  }
}

export default App;
