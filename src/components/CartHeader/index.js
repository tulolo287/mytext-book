

function CartHeader(props) {
  const { countCartItems } = props;

  return (
    <header className='row block center'>
      <div><h1>Shopping Cart</h1></div>

      <div className='row'>Cart {' '}
        {countCartItems ? <button className='badge'>{countCartItems}</button> : ''}
        Signin
      </div>
    </header>
  )
}

export default CartHeader