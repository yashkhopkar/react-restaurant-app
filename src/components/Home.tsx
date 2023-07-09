import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const elementStyle: React.CSSProperties = {
    margin: '0.5em',
  };

  return (
    <Container
      style={containerStyle}
      fluid
    >
      <h1>Welcome to Our Restaurant!</h1>
      <p>
        Experience the taste of finest cuisines, perfectly cooked just for you!
      </p>

      <Link to='/menu'>
        <Button
          style={elementStyle}
          variant='outline-primary'
        >
          View Menu
        </Button>
      </Link>

      <Link to='/reservation'>
        <Button
          style={elementStyle}
          variant='outline-secondary'
        >
          Make a Reservation
        </Button>
      </Link>

      <Link to='/contact'>
        <Button
          style={elementStyle}
          variant='outline-info'
        >
          Contact Us
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
