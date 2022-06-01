import { Button, Card } from "react-bootstrap";
import { Rating } from "./Rating";

export const Product = ({ product }) => {
  return (
    <div className="products">
      <Card>
        <Card.Img className="products" variant="top" alt={product.name} src={product.image} />
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
          <Button variant="danger">Remove from cart</Button>
          <Button disabled={!product.stock}>{!product.stock ? "Out of stock" : "Add to cart"}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
