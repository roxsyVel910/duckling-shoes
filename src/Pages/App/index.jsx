import React, { Component } from 'react';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrders from '../MyOrders';
import MyOrder from '../MyOrder';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import './App.css'



class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <MyAccount/>
        <MyOrder/>
        <MyOrders/>
        <NotFound/>
        <SignIn/>

      </div>
    );
  }
}

export default App;