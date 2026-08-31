import { useState } from "react"

export default function Counter(){
    const [count, setCount ] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    }
    return(
        <div>
            <h2>Counter</h2>
            <p>Current Value :{count} </p>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}