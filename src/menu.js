import React from "react";
import { withRouter, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
import logo from './images/applelogo.png';

class Menu extends React.Component {
    render() {
        return (
            <div className="welcome-nav">
                <header>
                    <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
                        <Navbar.Brand><Link to="welcome"><img className="img-fluid" src={logo} alt="Logo" /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                           
                            <Nav className="mr-auto-new">
                                <Nav.Link href="#home">iPhone</Nav.Link>
                                <Nav.Link href="#link">MacBook Pro</Nav.Link>
                                <Nav.Link href="#link">Watch </Nav.Link>
                                <Nav.Link href="#link" active>Notify me</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </div>
        );
    }
}

export default Menu;

