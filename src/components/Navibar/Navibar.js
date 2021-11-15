import React from "react";
import "./Navibar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navibar = () => {
  return (
    <>
      <Router>
        <Navbar bg="dark" expand="lg">
          <Container>
            <Nav className="me-auto">Home</Nav>
            <Link className="Link" to="/">
              Home
            </Link>
            <Link className="Link" to="/about">
              About
            </Link>
            <Link className="Link" to="/work">
              Work
            </Link>
            <Link className="Link" to="/project">
              Project
            </Link>
            <Link className="Link" to="/contact">
              Contact
            </Link>
          </Container>
        </Navbar>
      </Router>
    </>
  );
};

export default Navibar;
