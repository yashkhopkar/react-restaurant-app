import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-center py-4">
      <Container>
        <Row>
          <Col md={6} className="mb-4">
            <h5 className="text-uppercase">Restaurant App</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="text-dark">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={6} className="mb-4">
            <h5 className="text-uppercase">Legal</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/terms" className="text-dark">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-dark">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Our Restaurant. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
