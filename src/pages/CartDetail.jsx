import { Button, ListGroup } from "react-bootstrap";
import { CartState } from "../context/Context";
import { useState, useEffect } from "react";

const CartDetail = () => {
  const {
    state: { cart },
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + Number(cur.price), 0));
  }, [cart]);

  return (
    <>
      <div className="home">
        <div className="productContainer">
          <ListGroup>
            {cart.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </ListGroup>
        </div>
        <div className="filters summary">
          <span>Subtotal: {cart.length}</span>
          <span>Total: {total}</span>
          <Button>Proceed to Checkout</Button>
        </div>
      </div>
    </>
  );
};
export default CartDetail;
