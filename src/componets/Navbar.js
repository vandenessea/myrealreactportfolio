//import React from 'react';
import React from "react";
//import Carousel from './Carousel';

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
//import container from bootstrp react, NavDropdown
import Nav from "react-bootstrap/Nav";

function navbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" i class="bi bi-laptop">
          React-Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="https://www.bootcampspot.com/">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.linkedin.com/in/alexander-vandenesse-063a20b7/">
                Linkedln
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/vandenessea">
                Github
              </NavDropdown.Item>
              <NavDropdown.Item href="https://drive.google.com/file/d/1JsOc0iYaSpxeeWiPz5zeM6ohQSys1OGr/view?usp=sharing">
                Resume
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
