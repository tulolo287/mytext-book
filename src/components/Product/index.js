export default function Product(props) {
  const {product, onAdd} = props;
  return (
    <div className="row">
    <div>
    <img className="small" src="" alt="img"/>
    <h3>{product.title}</h3>
    <div><span>price:</span> {product.price}</div>
    <button onClick={() => onAdd(product)}>Add to Cart</button>
    </div>
    </div>
  )
}
