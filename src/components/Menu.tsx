import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import CartContext from "../context/CartContext";

export interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    void fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/getMenuItems"
      );
      const data: MenuItem[] = response.data as MenuItem[];
      setMenuItems(data);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  return (
    <Container>
      <h1>Menu</h1>
      <div className="card-container">
        {menuItems.map((menuItem) => (
          <Card key={menuItem._id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{menuItem.name}</Card.Title>
              <Card.Text>{menuItem.description}</Card.Text>
              <Card.Text>Price: ${menuItem.price.toFixed(2)}</Card.Text>
              <Button
                variant="primary"
                onClick={() => cartContext?.addToCart(menuItem._id)}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Menu;
