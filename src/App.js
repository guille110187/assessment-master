import React, { Component } from 'react';
import './App.css';
import "./style.scss";
import Login from './login';
import Register from './register';
import Welcome from './welcome';
import Apple from './apple';
import Cookies from 'js-cookie';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";


// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100);
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// }

class App extends React.Component {
  isAuthenticated = (cb) => {
    return Cookies.get("user") === "loginTrue";
  }

  authenticate = (cb) => {
    console.log('authenticate called');
    Cookies.set("user", "loginTrue");
    setTimeout(cb, 100);
  }

  signout = (cb) => {
    console.log('signing out');
    Cookies.remove("user");
  }

  render() {
    return (
      <Router>
        <Route path="/login" render={() => <Login authenticate={this.authenticate} isAuthenticated={this.isAuthenticated} />} />
        <Route path="/register" render={() => <Register authenticate={this.authenticate} isAuthenticated={this.isAuthenticated} />} />
        <PrivateRoute path="/welcome" component={Welcome} isAuthenticated={this.isAuthenticated} signout={this.signout} />
        <PrivateRoute path="/apple" component={Apple} isAuthenticated={this.isAuthenticated} signout={this.signout} />
      </Router>
    )
  }
}

const PrivateRoute = ({ component: Component, isAuthenticated: isAuthenticated, signout: signout, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated() === true
      ? <Component {...props} guille="5" isAuthenticated={isAuthenticated} signout={signout} />
      : <Redirect to="/login" />
  )} />
)



export default App;