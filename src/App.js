import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path="/services" component={Services}/>
            <Route path="/sign-up" component={SignUp}/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
