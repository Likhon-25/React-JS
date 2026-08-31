export default function Cart() {

    let counter = 0;

    const handleAddToCart = () =>{
        counter = counter + 1;
    }

    return (
        <div>
            <h3>Shooping Chart</h3>
            <p>Items in the cart: {counter}</p>
            <button onClick={handleAddToCart}>Add</button>
        </div>
    )
}