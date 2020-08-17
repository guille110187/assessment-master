import React from 'react';
import Menu from './menu';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
import { Link, Redirect, withRouter } from "react-router-dom";

class Apple extends React.Component {

  constructor() {
    super();
    this.state = {
      zoomOutClassName: 'in',
      zoomoutEnd: false
    }
  }

  handleOnClick = () => {
    this.props.signout();
    this.props.history.push('/login');
  }

  headerZoomOut() {
    let zoomOutClassName = this.state.zoomOutClassName;
    zoomOutClassName = zoomOutClassName + ' ' + 'end'
    this.setState({ zoomOutClassName });
  }

  zoomout() {

    this.state.zoomoutEnd = true;
    this.headerZoomOut();

  }

  doEffect() {
    if (this.state.zoomoutEnd)
      return;

    setTimeout(this.zoomout.bind(this), 500);
  }


  render() {

    this.doEffect();

    return (

      <div className={this.state.zoomOutClassName}>
        <header>
          <Menu />
        </header>
        <div className="base-welcome zoomout">
          <div className="container-apple zoomout">
            <div className="header-wrap zoomout header-name-apple">
              <h2><Link to="apple">Welcome to Apple</Link></h2>
            </div>
            <div className="apple-our-products"><h4>See our Products</h4></div>
          </div>
        </div>
      </div>

    )
  }

}


export default withRouter(Apple);