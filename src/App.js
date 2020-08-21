import React from 'react';
import './App.css';
import "./css/style.scss";
import Login from './components/login';
import Register from './components/register';
import Welcome from './components/welcome';
import Apple from './components/apple';
import iPhone from './components/iphone';
import Watch from './components/watch';
import Mac from './components/mac';
import Auth from './components/auth';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";



class App extends React.Component {
  render() {
    return (
      <Router>
        {<Redirect from='/' to='/welcome' />}
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <Register />} />
        <PrivateRoute path="/welcome" component={Welcome} />
        <PrivateRoute path="/apple" component={Apple} />
        <PrivateRoute path="/iphone" component={iPhone} />
        <PrivateRoute path="/mac" component={Mac} />
        <PrivateRoute path="/watch" component={Watch} />
      </Router>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isAuthenticated() === true
      ? <Component {...props} />
      : <Redirect to="/login" />
  )} />
)



export default App;