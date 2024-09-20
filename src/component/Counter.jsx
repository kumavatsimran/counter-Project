import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Counter() {
    let [count, setCount] = useState(0)
    function decriment() {
       let newCount = count - 1;
       setCount(newCount)
       localStorage.setItem('count',JSON.stringify(newCount))

    }
    function increment() {
        let newCount=count+1;
        setCount(newCount)
        localStorage.setItem('count',JSON.stringify(newCount))

    }
     useEffect(()=>{
        let oldCount = JSON.parse(localStorage.getItem('count'));
        setCount(oldCount);
    }) 
 
    return (
        <div>
            <h1>counter</h1>
            <button onClick={decriment}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+ </button>

        </div>
    );
}
