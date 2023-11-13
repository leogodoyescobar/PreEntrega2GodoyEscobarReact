import { useState } from "react";


export const useCount = ({initial = 0, max }) => {
    const [count, setCount] = useState(initial);

    const increment = () => { 
        if(count === max) {
            return setCount(count)
        }
        setCount(count + 1);
    }
    const decrement = () => { 
        if(count === 0) {
            return setCount(0);
        }
            setCount(count - 1);
    }

    const reset = () => { 
        setCount(initial);
    }

    // const increment = () => {
    //     if (count < stock) {
    //         return setCount(count + 1);
    //     }
    //     setCount(count);
    //     }
    
    // const decrement = () => {
    //     if (count === 0) {
    //         return setCount(0);
    //     }
    //     setCount(count - 1);
    //     }

    return {
        count,
        increment,
        decrement,
        reset
    }
}