
export default function basket(props) {
    const { cart, removeFromCart } = props;

    return (
        <div>{cart.map((item, idx) => (
            <div key={item.name + idx}>
                <h2>{item.name}</h2>
                <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
        ))}</div>
    )
}
