

function Products(props) {
    const { product, addToCart } = props;

    return (
        <>


            <div className='product'>
                <h2>{product.name}</h2>
                <h4>{product.price}9</h4>
                <img src={product.image} alt='ljl' />
                <button onClick={() => addToCart(product)}>Add to card</button>
            </div>

        </>
    )
}

export default Products