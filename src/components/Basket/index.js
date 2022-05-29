

export default function Basket(props) {
  const {cartItems, onAdd} = props;

  return (
    <aside className="block col-1"><h2>Cart Items</h2>
    <div>
      {cartItems.length == 0 && <div>Cart is empty...</div>}
    </div>
    {cartItems.map(item => 
    <div key={item.id} className='row'>
      <div className='col-2'>{item.title}</div>
      <button onClick={onAdd}>+</button>
    </div>)}
    </aside>
  )
}
