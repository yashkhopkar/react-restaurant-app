import { ReactNode, createContext, useEffect, useState } from "react";
import axios from "axios";

interface CartItem {
  itemId: string;
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  getCartItemQuantity: (itemId: string) => number;
  getTotalCartQuantity: () => number;
}

const CartContext = createContext<CartContextProps | null>(null);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    axios
      .get("http://localhost:3000/api/getCartItems")
      .then((response) => {
        const data = response.data as CartItem[];
        setCartItems(data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  };

  const addToCart = (itemId: string) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find(
        (item) => item.itemId === itemId
      );

      if (existingCartItem) {
        const updatedCartItems = prevCartItems.map((item) => {
          if (item.itemId === itemId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });

        axios
          .post("http://localhost:3000/api/saveCartItems", updatedCartItems, {
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
            console.log("Cart items saved to MongoDB:", response.data);
          })
          .catch((error) => {
            console.error("Error saving cart items to MongoDB:", error);
          });

        return updatedCartItems;
      } else {
        const newCartItem = { itemId, quantity: 1 };
        const updatedCartItems = [...prevCartItems, newCartItem];
        axios
          .post("http://localhost:3000/api/saveCartItems", updatedCartItems, {
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
            console.log("Cart items saved to MongoDB:", response.data);
          })
          .catch((error) => {
            console.error("Error saving cart items to MongoDB:", error);
          });

        return updatedCartItems;
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) => {
          if (item.itemId === itemId) {
            const updatedItem = { ...item, quantity: item.quantity - 1 };
            axios
              .post(
                "http://localhost:3000/api/removeCartItems",
                [updatedItem],
                {
                  headers: { "Content-Type": "application/json" },
                }
              )
              .then((response) => {
                console.log("Cart item updated in the backend:", response.data);
              })
              .catch((error) => {
                console.error(
                  "Error updating cart item in the backend:",
                  error
                );
              });

            return updatedItem;
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const getCartItemQuantity = (itemId: string) => {
    const cartItem = cartItems.find((item) => item.itemId === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const getTotalCartQuantity = () => {
    return cartItems.reduce(
      (total, item) =>
        total +
        (typeof item.quantity === "string"
          ? parseInt(item.quantity)
          : item.quantity),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getCartItemQuantity,
        getTotalCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
export { CartProvider };
