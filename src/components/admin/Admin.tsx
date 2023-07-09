import { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface IMenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

const btnStyle: React.CSSProperties = {
  marginRight: '0.5em',
};

const Admin = () => {
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([]);
  const navigate = useNavigate();

  const fetchData = () => {
    const data: IMenuItem[] = [
      { id: '1', name: 'Pizza', description: 'Cheesy goodness', price: 10.99 },
      {
        id: '2',
        name: 'Burger',
        description: 'Juicy burger with fries',
        price: 8.99,
      },
    ];
    setMenuItems(data);
  };

  const handleAddMenuItem = () => {
    navigate('addMenuItem');
  };

  const handleEditMenuItem = (id: string) => {
    // Edit menu item logic goes here
  };

  const handleDeleteMenuItem = (id: string) => {
    // Delete menu item logic goes here
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Admin Dashboard</h1>
      <Button onClick={handleAddMenuItem}>Add Menu Item</Button>
      <h2>Menu Items</h2>
      <Table
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <Button
                  variant='success'
                  onClick={() => handleEditMenuItem(item.id)}
                  style={btnStyle}
                >
                  Edit
                </Button>
                <Button
                  variant='danger'
                  onClick={() => handleDeleteMenuItem(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Admin;
