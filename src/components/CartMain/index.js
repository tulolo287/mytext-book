import Product from "../Product"

function CartMain(props) {
  const {products} = props;
  return (
    <div className="block col-2"><h2>Products</h2>
    <div>{products.map(product => <Product key={product.id} product={product} />)}</div>
    </div>
  )
}

export default CartMain