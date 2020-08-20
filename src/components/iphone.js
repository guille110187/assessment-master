import React from 'react';
import Menu from './menu';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table, Container, Row, Col } from 'react-bootstrap';

import { Link, Redirect, withRouter } from "react-router-dom";
import iphone from '../images/iphone_icon.png';
import laptop from '../images/laptop_icon.png';
import watch from '../images/watch_icon.png';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'http://lorempixel.com/1000/600/nature/1/',
    thumbnail: 'http://lorempixel.com/250/150/nature/1/',
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/2/',
    thumbnail: 'http://lorempixel.com/250/150/nature/2/'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/3/',
    thumbnail: 'http://lorempixel.com/250/150/nature/3/'
  }
]

class Iphone extends React.Component {

  
  render() {

    return (

      <div>
        <header>
          <Menu />
        </header>
        <Container fluid className="welcome-iphone">
          <Row>
            <Col className="iphone-ultimate">
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
            <Col><ImageGallery items={images} /></Col>
            
          </Row>

        </Container>
      </div>
    )
  }

}


export default withRouter(Iphone);