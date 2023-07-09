import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar
      expand='lg'
      className='bg-body-tertiary'
    >
      <Container>
        <Navbar.Brand href='#home'>Restaurant App</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              as={Link}
              to='home'
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='admin'
            >
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
