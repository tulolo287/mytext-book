import { createContext, useContext } from 'react'
const { faker } = require('@faker-js/faker');
import { cartReducer } from './Reducer.js'
import { useReducer } from 'react'

const Cart = createContext();

const Context = ({ children }) => {

  faker.seed(23)
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    image: faker.image.image(),
    price: faker.commerce.price(),
    rating: faker.random.numeric(),
    fastDelivery: faker.datatype.boolean(),
    stock: faker.datatype.boolean() 
  }))

  console.log(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  })

  return (
    <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
  )
}

export default Context

export const CartState = () => {
  return useContext(Cart)
}
