import React from 'react';
import Menu from './menu';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import Watch_Slider from './watch_slider';
import Menu_Vertical from './menu_vertical';


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
                <div className="iphone-text">Apple Watch</div>
              </Row>
              <Row className="padding-10">
                <div className="watch-header-text">Change starts within</div>
              </Row>
              <Row className="padding-10">
                <p className="watch-future">Apple Watch Series 4. Fundamentally redesigned and re-engineered to help you be even more active, healty, and connected</p>
              </Row >
              <Row className="padding-10">
                <div className="iphone-start">Starts shipping MM-DD-YYYY</div>
              </Row>
            </Col>
            <Col xs={6} md={5} className="gallery_watch watch-slider">
              <Watch_Slider />
            </Col>
            <Col xs={6} md={1} className="vertical-bar">
              <Menu_Vertical />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={2} className="watch-price-section">
              <p className="iphone-price">From $699</p><br /><p className="iphone-buy">Buy Now</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}


export default withRouter(Iphone);