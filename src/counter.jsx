import React,{ useState } from "react";

function Counter () {
    const [count, setCount] = useState(0)
    const increment=() =>{
        setCount(count + 1)
    }
    const decrement=() =>{
        setCount(count - 1)
    }
    const reset=() =>{
        setCount(0)
    }
    return(
        <>
        <div className="counter">{count}</div>
        <button onClick={increment}>Add</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Reduce</button>

        </>
    )
    
}
export default Counter