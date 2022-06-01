import { Header } from "../components/Cart3/Header.jsx"
import { CartState } from "../context/Context.js"
import { Product } from "../components/Cart3/Product.jsx"
import { Filters } from "../components/Cart3/Filters.jsx"
import "./style.css"


const Cart3 = () => {
  const { state: { products } } = CartState();
  console.log(products);

  return (
    <>
      <div>Cart3</div>
      <Header />
      <div className='home'>
        <Filters />
        <div className='productContainer'>
          {products.map(product => <Product key={product.id} product={product} />)}
        </div>
      </div>
    </>
  )
}

export default Cart3

