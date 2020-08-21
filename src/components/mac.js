import React from 'react';
import Menu from './menu';
import Menu_Vertical from './menu_vertical';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { Link, Redirect, withRouter } from "react-router-dom";
import Mac_keyboard from '../images/mac_keyboard.png';




class Mac extends React.Component {

    render() {

        return (

            <div>
                <header>
                    <Menu />
                </header>
                <Container fluid className="">
                    <Row className="header-mac">
                        <Col xs={11} md={11} className="header-mac-text" >
                            <Row>
                                <div className="header-mac-title">MacBook Pro</div>
                            </Row>
                            <Row>
                                <div className="header-mac-date">stats shipping MM-DD-YYYY</div>
                            </Row>
                            <Row className="header-more">
                                <div className="header-mac-more">More power.</div>

                                <div className="header-mac-more">More pro</div>
                            </Row>
                            <Row xs={2} md={4} lg={6} className="header-mac-description-title">
                                <Col><div className="header-mac-description">8-core <span>intel processor</span></div></Col>
                                <Col><div className="header-mac-description">32 GB <span>Memory</span></div></Col>
                            </Row>
                        </Col>
                        <Col xs={1} md={1} className="vertical-icon">
                            <Menu_Vertical />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2}><div className="mac-buy">Buy Now ></div></Col>
                        <Col xs={5}>
                            <div className="img-wrapper">
                                <img className="laptop" src={Mac_keyboard} alt="Logo" />
                            </div>
                        </Col>
                        <Col xs={5} className="mac-subscribe">
                            <div className="form-subscribe">
                                <Form>
                                    <div className="form-header">Subscribe Now</div>
                                    <Form.Row className="align-items-center">
                                        <Col xs={7}>
                                            <Form.Label htmlFor="inlineFormInput" srOnly> Enter the email address</Form.Label>
                                            <Form.Control
                                                className="mb-2"
                                                id="inlineFormInput"
                                                placeholder="Enter the email address"
                                            />
                                        </Col>
                                        <Col xs={5}>
                                            <Button type="submit" variant="dark" className="mb-2"> Subscribe</Button>
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}


export default withRouter(Mac);