import { Card } from "react-bootstrap"
import { Rating } from "./Rating"

export const Product = ({ product }) => {

    return (
        <>
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
                    </Card.Subtitle>
                    <Rating rating={product.rating} />
                </Card.Body>
            </Card>
        </>

    )
}
