import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path='/' exact/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
