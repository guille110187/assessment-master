import React from "react";
import { withRouter, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
import iphone from '../images/iphone_icon.png';
import laptop from '../images/laptop_icon.png';
import watch from '../images/watch_icon.png';
import Cookies from 'js-cookie';

class Menu_Vertical extends React.Component {

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
                   
                        <Nav className="flex-column" activeKey={this.props.location.pathname}>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/iphone" eventKey="/iphone"><figure><img className="img-iphone" src={iphone} alt="Iphone" /></figure></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/mac" eventKey="/mac"><figure><img className="img-iphone" src={laptop} alt="Laptop" /></figure></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/watch" eventKey="/watch"><figure><img className="img-iphone" src={watch} alt="Watch" /></figure></Nav.Link>
                            </Nav.Item>
                        </Nav>
                  
                </header>

            </div>
        );
    }
}

export default withRouter(Menu_Vertical);

