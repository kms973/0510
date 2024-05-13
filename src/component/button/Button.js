import React, { useEffect, useState } from "react";

export default function Button (){

    const [count, setCount] = useState(0);
    const [comcount, setComCount] = useState(0);
    const [think, setThink] = useState("");
    const [numberVisible, setNumberVisible] = useState(false);
    const [resultVisible, setResultVisible] = useState(false);

    function settingButtonWin(){
        setNumberVisible(true)
        setThink("승")
    }

    function settingButtonLose(){
        setNumberVisible(true)
        setThink("패")
    }

    function numberSet(){
        setCount(Math.floor(Math.random() * 10))
        setComCount(Math.floor(Math.random() * 10))
        setResultVisible(true)
    }

    function getResult(){
        if (think === "승" && count > comcount) {
            return "승리";
        } else if (think === "패" && count < comcount) {
            return "승리";
        } else if (count === comcount){
            return "무승부";
        } 
        else {
            return "패배";
        }
    }
    
    return (
        <>
        <p>승 패 선 택</p>
        <button onClick={settingButtonWin}>승</button>
        <button onClick={settingButtonLose}>패</button>
        {numberVisible && <button onClick={numberSet}>set number</button>}
        {numberVisible && <h1>나의 숫자 : {count}</h1>}
        {numberVisible && <h1>상대의 숫자 : {comcount}</h1>}
        {resultVisible && <h1>결과 : {getResult()}</h1>}
        
        </>
    )
}