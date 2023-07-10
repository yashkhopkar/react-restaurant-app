import "./App.css";
import { Outlet } from "react-router-dom";
import Navigation from "./components/ui/Navigation";
import Footer from "./components/ui/Footer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Navigation />
        <Outlet />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
