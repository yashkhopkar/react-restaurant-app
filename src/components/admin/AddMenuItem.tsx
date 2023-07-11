import axios from 'axios';
import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

interface IMenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

const AddMenuItem = () => {
  const [menuItem, setMenuItem] = useState<IMenuItem>({
    name: '',
    description: '',
    price: 0,
    image: 'test.png',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenuItem({
      ...menuItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(menuItem);
    addMenuItem();
  };

  const addMenuItem = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/addMenuItem',
        {
          name: menuItem.name,
          description: menuItem.description,
          price: menuItem.price,
          image: 'test.png',
        }
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
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
