import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

interface IMenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

const AddMenuItem: React.FC = () => {
  const [menuItem, setMenuItem] = useState<IMenuItem>({
    id: '',
    name: '',
    description: '',
    price: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenuItem({
      ...menuItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add menu item logic goes here
    console.log(menuItem);
  };

  return (
    <Container>
      <h1>Add Menu Item</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter name'
            name='name'
            value={menuItem.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId='formBasicDescription'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter description'
            name='description'
            value={menuItem.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId='formBasicPrice'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter price'
            name='price'
            value={menuItem.price.toString()}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button
          variant='primary'
          type='submit'
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddMenuItem;
