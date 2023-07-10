import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import AuthContext, { AuthContextType } from "../../context/AuthContext";

const Navigation = () => {
  const cartContext = useContext(CartContext);
  const auth = useContext(AuthContext) as AuthContextType;

  return (
    <Navbar expand="lg" style={{ backgroundColor: "rgb(0, 123, 255)" }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          Restaurant App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ flex: 1 }}>
            <Nav.Link as={Link} to="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="admin" style={{ color: "white" }}>
              Admin
            </Nav.Link>
          </Nav>
          <Nav>
            {auth.isLoggedIn ? (
              <Nav.Link
                as={Link}
                to={"/"}
                onClick={auth.logout}
                style={{ color: "white" }}
              >
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to={"login"} style={{ color: "white" }}>
                Login
              </Nav.Link>
            )}
            {!auth.isLoggedIn && (
              <Nav.Link as={Link} to="register" style={{ color: "white" }}>
                Register
              </Nav.Link>
            )}
            {auth.isLoggedIn && (
              <Nav.Link as={Link} to="cart">
                <div style={{ position: "relative" }}>
                  <FaShoppingCart size={20} color="white" />
                  {cartContext && cartContext?.getTotalCartQuantity() > 0 && (
                    <span
                      style={{
                        position: "absolute",
                        top: "-15px",
                        right: "-11px",
                        backgroundColor: "crimson",
                        color: "white",
                        borderRadius: "50%",
                        padding: "4px",
                        width: "25px",
                        textAlign: "center",
                        fontSize: "12px",
                      }}
                    >
                      {cartContext?.getTotalCartQuantity()}
                    </span>
                  )}
                </div>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
