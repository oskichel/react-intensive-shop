import React, {useState} from "react";
import st from './Counter.module.css';

const Counter = function () {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count > 0 ? count - 1 : 0)
    }

    return (
        <div className={st.counter}>
            <button onClick={decrement}>-</button>
            <div className={st.count}>{count}</div>
            <button onClick={increment}>+</button>
        </div>
    )
};

export default Counter;