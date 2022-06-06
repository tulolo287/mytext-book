import { Button, Col, ListGroup, Row, Form, Image } from "react-bootstrap";
import { CartState } from "../context/Context";
import { useState, useEffect } from "react";
import { Rating } from "../components/Cart3/Rating";
import { AiFillDelete } from "react-icons/ai"

const CartDetail = () => {
  const {
    state: { cart }, dispatch
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + Number(cur.price) * cur.qty, 0));
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
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={2}>
                      <span>{item.name}</span>
                    </Col>
                    <Col md={2}>
                      <span>{item.price}</span>
                    </Col>
                    <Col md={2}>
                      <Rating rating={item.rating} />
                    </Col>
                    <Col md={2}>
                      <Form.Control as="select" value={item.qty} onChange={e => dispatch({ type: "CHANGE_CART_QTY", payload: { id: item.id, qty: e.target.value } })} >
                        {
                          [...Array(Number(item.inStock))].map((x, idx) => <option key={idx + 1}>{idx + 1}</option>)
                        }

                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button type="button" variant="light" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}><AiFillDelete /></Button>
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
      </div >
    </>
  );
};
export default CartDetail;
