import {
  Badge,
  Nav,
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Button,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../../context/Context";
import { Link } from "react-router-dom";

export const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const { filterState: { searchQuery }, filterDispatch } = CartState();

  console.log(searchQuery);

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80, marginBottom: 20 }}>
      <Container>
        <Navbar.Brand>
          <a href="/#">Shopping cart</a>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            onChange={(e) => filterDispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value })}
            style={{ width: 500 }}
            placeholder="Search"
            className="m-auto"
          ></FormControl>
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="red" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 344 }}>
              {cart.length > 0 ? (
                cart.map((product) => (
                  <>
                    <div key={product.id} className="cartItem">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="cartItemImage"
                      />
                      <div className="cartItemDetail">
                        <span>{product.name}</span>
                        <span>{product.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        style={{ cursor: "pointer" }}
                        fontSize="20px"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          })
                        }
                      />

                      <hr />
                    </div>
                    <Link to="/detail">
                      <Button>Go to cart</Button>
                    </Link>
                  </>
                ))
              ) : (
                <span style={{ padding: 10 }}>Cart is empty</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
