import { useState } from 'react';


export const useCounter = ({initialState = 1, contador = 1}) => {
    
    const [counter, setCounter] = useState(initialState); // 10

    const reset = () => {
        setCounter( initialState );
    }

    const increment = () => {
        setCounter(state => state + contador );  
    }

    const decrement = () => {
        setCounter(state => state - contador );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };

}
