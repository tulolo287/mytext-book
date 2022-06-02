import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { CartState } from "../context/Context";
import { useState, useEffect } from "react";
import { Rating } from "../components/Cart3/Rating";

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
              <div key={item.id}>
                <ListGroup.Item>
                  <Row>
                    <Col md={2}>
                      <span>{item.name}</span>
                    </Col>
                    <Col md={2}>
                      <span>{item.price}</span>
                    </Col>
                    <Col md={2}>
                      <Rating rating={item.rating} />
                    </Col>
                  </Row>
                </ListGroup.Item>
              </div>
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
