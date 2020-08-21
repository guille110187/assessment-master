import React from "react";
import { withRouter, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
import logo from '../images/applelogo.png';
import Cookies from 'js-cookie';

class Menu extends React.Component {

    constructor(props) {
        super(props);

    }
    handleClick(e) {
        Cookies.remove("user");
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="welcome-nav">
                <header>
                    <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
                        <Navbar.Brand as={Link} to="welcome"><img className="img-fluid" src={logo} alt="Logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className="mr-auto-new" activeKey={this.props.location.pathname}>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/iphone" eventKey="/iphone">iPhone</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/mac" eventKey="/mac">MacBook Pro</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/watch" eventKey="/watch">Watch</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link onClick={this.handleClick.bind(this)}>Log Out</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Nav className="notify-me">Notify me</Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>

            </div>
        );
    }
}

export default withRouter(Menu);

