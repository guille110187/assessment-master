import React from 'react';
import Menu from './menu';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
import { Link, Redirect, withRouter } from "react-router-dom";
import iphone from '../images/iphone_icon.png';
import laptop from '../images/laptop_icon.png';
import watch from '../images/watch_icon.png';
import PhoneIphone from 'rmdi/lib/PhoneIphone';
import LaptopMac from 'rmdi/lib/LaptopMac';
import Watch from 'rmdi/lib/Watch';

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
        <div className="base-apple zoomout">
          <div className="container-apple zoomout">
            <div className="header-wrap zoomout header-name-apple">
              <h2>Welcome to Apple</h2>
            </div>
            <br />
            <br />
            <div className="apple-our-products"><h4>See our Products</h4></div>
            <br />
            <br />
            <div className="icons">
              {/* <figure><Link to="iphone"><img className="img-fluid" src={iphone} alt="Iphone" /></Link></figure>
              <figure className="icon-laptop "><img className="img-fluid" src={laptop} alt="Laptop" /></figure>
              <figure><img className="img-fluid" src={watch} alt="Watch" /></figure> */}
              <Link to="iphone">
                <PhoneIphone
                  size={34}
                  color='#CCCCCC'
                />
              </Link>
              <Link to="mac">
                <LaptopMac
                  size={34}
                  color='#CCCCCC'
                />
              </Link>
              <Link to="watch">
                <Watch
                  size={34}
                  color='#CCCCCC'
                />
              </Link>
            </div>

          </div>
        </div>
      </div>

    )
  }

}


export default withRouter(Apple);