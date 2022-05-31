export default function Basket(props) {
  const {cartItems, onAdd, onRemove} = props;

  return (
    <aside className="block col-1"><h2>Cart Items</h2>
    <div>
      {cartItems.length == 0 && <div>Cart is empty...</div>}
      {cartItems.map(item => (
      <div key={item.id + item.title} className='row'>
        <div>{item.title}</div>
        <div>
          <button onClick={() => onAdd(item)} className='add'>+</button>
          <button onClick={() => onRemove(item)} className='remove'>-</button>
        </div>
        <div>
        {item.qty} x ${item.price.toFixed(2)}
        </div>
      </div>
      )
      
      )}
    </div>
    {cartItems.map(item => 
    (<div key={item.id + item.title} className='row'>
      <div className='col-2'>{item.title}</div>
      <button className='qtyAdd' onClick={() => onAdd(item)}>+</button>
      <button className='qtyRemove' onClick={() => onRemove(item)}>-</button>
      <div>{item.qty} x ${item.price.toFixed(2)}</div>
      Price: {item.price * item.qty}
      {console.log(item)}
    </div>))}
    </aside>
  )
}
