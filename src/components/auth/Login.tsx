import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const elementStyle: React.CSSProperties = {
    margin: '0.5em',
  };

  return (
    <Container
      style={containerStyle}
      fluid
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group
          controlId='formBasicEmail'
          style={elementStyle}
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='email'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Form.Group>

        <Form.Group
          controlId='formBasicPassword'
          style={elementStyle}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </Form.Group>

        <Button
          variant='primary'
          type='submit'
          style={elementStyle}
        >
          Submit
        </Button>
      </Form>
      <p>
        Don't have an account? <Link to='/register'>Register</Link>
      </p>
    </Container>
  );
};

export default Login;
