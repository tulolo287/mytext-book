export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length == 0 && <div>Cart is empty...</div>}
      </div>

      {cartItems.map(item =>
        <div key={item.id + item.title} className='row'>
          <div className='col-2'>{item.title}</div>
          <div className='col-2'>
            <button className='qtyAdd' onClick={() => onAdd(item)}>+</button>
            <button className='qtyRemove' onClick={() => onRemove(item)}>-</button>
          </div>
          <div className='col-2'>{item.qty} x {item.price.toFixed(2)}$</div>



        </div>
      )}
      _{cartItems.length !== 0 && (
        <>
          <hr />
          <div className='row'>
            <div className='col-2'>Item price</div>
            <div className='col-2'>${itemsPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2'>Tax price</div>
            <div className='col-2'>${taxPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2'>Shipping price</div>
            <div className='col-2'>${shippingPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2'><strong>Total price</strong></div>
            <div className='col-2'>${totalPrice.toFixed(2)}</div>
          </div>
        </>
      )}
      <button onClick={() => alert("ok")}>Checkout</button>
    </aside>
  )
}
