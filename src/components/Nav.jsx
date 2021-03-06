import React from "react";
import "../styles/css/NavBar.css";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect className="navbar">
            {/* <Container className="nav-wrapper"> */}
            <Nav className="dots-wrapper">
                <Nav.Item id="dot-1" className="dots"></Nav.Item>
                <Nav.Item id="dot-2" className="dots"></Nav.Item>
                <Nav.Item id="dot-3" className="dots"></Nav.Item>
            </Nav>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
            {/* <Navbar.Collapse id="responsive-navbar-nav">     */}
            <Nav className="ml-auto">
                <LinkContainer to="/">
                    <Nav.Link>Contato</Nav.Link>
                </LinkContainer>
            </Nav>
            {/* </Navbar.Collapse> */}
            {/* </Container> */}
        </Navbar>
    );
};

export default NavBar;
