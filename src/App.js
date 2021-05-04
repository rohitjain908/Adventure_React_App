import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
