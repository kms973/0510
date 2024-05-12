import React, { useState } from "react";

export default function Button (){

    const [count, setCount] = useState(0);

    
    function PlusClickEvent(){
        setCount(count + 1);
        console.log(count)
    }

    function MinusClickEvent(){
        setCount(count - 1);
        console.log(count)
    }

    return (
        <>
        <p>count</p>
        <h1>{count}</h1>
        <button onClick={PlusClickEvent}>+</button>
        <button onClick={MinusClickEvent}>-</button>
        </>
    )
}