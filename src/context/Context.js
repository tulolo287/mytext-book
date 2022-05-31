import { createContext } from 'react'
const { faker } = require('@faker-js/faker');

const Cart = createContext();

const Context = ({ children }) => {

  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    image: faker.image.image()
  }))

  console.log(products);

  return (
    <Cart.Provider value={{ products }}>{children}</Cart.Provider>
  )
}

export default Context