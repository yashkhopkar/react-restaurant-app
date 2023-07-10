import React, { useContext, useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import CartContext from "../context/CartContext";

interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);
  const [menuItems, setMenuItems] = useState<MenuItem[]>();

  const handleIncreaseQuantity = (itemId: string) => {
    cartContext?.addToCart(itemId);
  };

  const handleDecreaseQuantity = (itemId: string) => {
    cartContext?.removeFromCart(itemId);
  };

  return (
    <Container>
      <h1>Cart</h1>
      <div className="card-container">
        {cartContext?.cartItems.map((cartItem) => {
          if (cartItem.quantity > 0) {
            return (
              <Card key={cartItem.itemId} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Text>Item: {cartItem.itemId}</Card.Text>
                  <Card.Text>Quantity: {cartItem.quantity}</Card.Text>
                  <Button
                    onClick={() => handleIncreaseQuantity(cartItem.itemId)}
                  >
                    Increase
                  </Button>
                  <Button
                    onClick={() => handleDecreaseQuantity(cartItem.itemId)}
                  >
                    Decrease
                  </Button>
                </Card.Body>
              </Card>
            );
          } else {
            return null; // Don't render the card if the quantity is 0
          }
        })}
      </div>
    </Container>
  );
};

export default Cart;
