import { Button, Card } from "react-bootstrap";
import { CartState } from "../../context/Context";
import { Rating } from "./Rating";

export const Product = ({ product }) => {
  const { state: { cart }, dispatch } = CartState();

  console.log(cart);

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" alt={product.name} src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>{product.price.split(".")[0]}</span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>Standart shipping</div>
            )}
            <Rating rating={product.rating}></Rating>
          </Card.Subtitle>
          {cart.some(p => p.id === product.id) ?
            (<Button variant="danger" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: product })}>Remove from cart</Button>) :
            (<Button disabled={!product.stock} onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>{!product.stock ? "Out of stock" : "Add to cart"}</Button>)}


        </Card.Body>
      </Card>
    </div >
  );
};
