import React from 'react';
import Menu from './menu';
import Menu_Vertical from './menu_vertical';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table, Container, Row, Col } from 'react-bootstrap';
import { Link, Redirect, withRouter } from "react-router-dom";
import IPhone_Slider from './iphone_slider';



class Iphone extends React.Component {

  render() {

    return (

      <div>
        <header>
          <Menu />
        </header>
        <Container fluid className="welcome-iphone">
          <Row >
            <Col xs={12} md={6} className="iphone-ultimate">
              <Row className="padding-10">
                <div className="iphone-text">iPhone</div>
              </Row>
              <Row className="padding-10">
                <div className="iphone-the-ultimate">The ultimate iPhone</div>
              </Row>
              <Row className="padding-10">
                <p className="iphone-future">The future is here. Join the iphone Upgrade<br />Program to get the lates Iphone - NOW!</p>
              </Row >
              <Row className="padding-10">
                <div className="iphone-start">Starts shipping MM-DD-YYYY</div>
              </Row>
            </Col>
            <Col xs={6} md={5} className="gallery iphone-slider">
              <IPhone_Slider />
            </Col>
            <Col xs={6} md={1} className="vertical-bar">
              {/* <figure><Link to="iphone"><img className="img-iphone" src={iphone} alt="Iphone" /></Link></figure>
              <figure><img className="img-iphone" src={laptop} alt="Laptop" /></figure>
              <figure><Link to="watch"><img className="img-iphone" src={watch} alt="Watch" /></Link></figure> */}
              <Menu_Vertical />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={2} className="iphone-price-section">
              <p className="iphone-price">From $699</p><br /><p className="iphone-buy">Buy Now</p>
            </Col>
          </Row>


        </Container>
      </div>
    )
  }

}


export default withRouter(Iphone);