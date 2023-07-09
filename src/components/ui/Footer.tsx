import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle: React.CSSProperties = {
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#f8f9fa',
    color: 'black',
    textAlign: 'center',
    padding: '1em',
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col>
            <h5>Restaurant App</h5>
            <ul>
              <li>
                <Link to='/about'>About Us</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>Legal</h5>
            <ul>
              <li>
                <Link to='/terms'>Terms of Service</Link>
              </li>
              <li>
                <Link to='/privacy'>Privacy Policy</Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
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
