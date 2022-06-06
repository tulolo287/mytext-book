import { Header } from "../components/Cart3/Header.jsx"
import { CartState } from "../context/Context.js"
import { Product } from "../components/Cart3/Product.jsx"
import { Filters } from "../components/Cart3/Filters.jsx"
import "./styles.css"
import { FaSourcetree } from "react-icons/fa"


const Cart3 = () => {
  const {
    state: { products },
    filterState: { sort, byStock, byRating, byFastDelivery, searchQuery }
  } = CartState();

  const filteredProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) => sort === "lowToHigh" ? a.price - b.price : b.price - a.price)
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter(product => product.stock)
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter(product => product.fastDelivery)
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(product => product.rating == byRating)
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter(product => product.name.toLowerCase().includes(searchQuery))
    }

    return sortedProducts;
  }

  return (
    <>
      <div>Cart3</div>
      <Header />
      <div className='home'>
        <Filters />
        <div className='productContainer'>
          {filteredProducts().map(product => <Product key={product.id} product={product} />)}
        </div>
      </div>
    </>
  )
}

export default Cart3

