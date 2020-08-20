import React from 'react';
import './App.css';
import "./css/style.scss";
import Login from './components/login';
import Register from './components/register';
import Welcome from './components/welcome';
import Apple from './components/apple';
import Iphone from './components/iphone';
import Cookies from 'js-cookie';




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";



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
        {/* <Redirect from='/' to='/welcome' /> */}
        <Route path="/login" render={() => <Login authenticate={this.authenticate} isAuthenticated={this.isAuthenticated} />} />
        <Route path="/register" render={() => <Register authenticate={this.authenticate} isAuthenticated={this.isAuthenticated} />} />
        <PrivateRoute path="/welcome" component={Welcome} isAuthenticated={this.isAuthenticated} />
        <PrivateRoute path="/apple" component={Apple} isAuthenticated={this.isAuthenticated}  />
        <PrivateRoute path="/iphone" component={Iphone} isAuthenticated={this.isAuthenticated}  />
        
      </Router>
    )
  }
}

const PrivateRoute = ({ component: Component, isAuthenticated: isAuthenticated, signout: signout, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated() === true
      ? <Component {...props}  isAuthenticated={isAuthenticated} signout={signout} />
      : <Redirect to="/login" />
  )} />
)



export default App;