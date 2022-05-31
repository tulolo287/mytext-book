import CartHeader from "../components/CartHeader"
import CartMain from "../components/CartMain"
import Basket from "../components/Basket"
import data from "../data"
import {useState} from "react"

export default function Cart() {
    const {products} = data;
    const [cartItems, setCartItems] = useState([]);

   const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if(exist) {
            setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty += 1} : x))
        } else {
            setCartItems([...cartItems, {...product, qty: 1}])
        }
   }

   const onRemove = (product) => {
       const exist = cartItems.find(x => x.id === product.id);
       if(exist.qty === 1) {
           setCartItems(cartItems.filter(x => x.id !== product.id))
       } else {
           setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty -1} : x))
       }
   }
   
    
    return (
    <div>
    <CartHeader countCartItems={cartItems.length}/>
    <div className="row">
        <CartMain onAdd={onAdd} products={products}/>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems = {cartItems}/>
    </div>
    </div>
    )
}
//export default Cart;