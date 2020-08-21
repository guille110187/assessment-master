import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Auth from './auth';

class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  handleOnClick = () => {
    Auth.authenticate(() => {
      this.props.history.push('/welcome')
    });

  }

  render() {
    return (
      Auth.isAuthenticated() ?
        <Redirect to="/welcome" />
        :
        <div className="base-container">
          <div className="content">
            <div className="form" >
              <div className="header">Sing-In</div>
              <div className="form-group form-custom">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="email" />
              </div>
              <div className="form-group form-custom">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" />
              </div>
              <div className="footer">
                <Button variant="dark" className="mr-2 btn-black" onClick={this.handleOnClick}>Sing-In</Button>
              </div>
            </div>
            <div className="link-register">
              <div>Not registered ? <Link to="register">Sign-up</Link></div>
            </div>
          </div>
        </div>
    );
  }

}


export default withRouter(Login);