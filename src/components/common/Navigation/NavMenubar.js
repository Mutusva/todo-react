import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavMenubar = () => {
  
  
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="md" sticky="top">
          <Navbar.Brand>
            <Link to={"/"}>Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/">
                Todos
            </Nav.Link>              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  };
  
  export default NavMenubar;