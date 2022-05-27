import CartHeader from "../components/CartHeader"
import CartMain from "../components/CartMain"
import Basket from "../components/Basket"

export default function Cart() {
    return (
    <div>
    <CartHeader/>
    <div>
        <CartMain/>
        <Basket/>
    </div>
    </div>
    )
}
//export default Cart;