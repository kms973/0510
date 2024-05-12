import { useState } from "react";


export default function NameInput(props){

    const [inputValue, setInputValue] = useState("");


    function handleSummit(){
        event.preventDefault();
        setInputValue('');
    }

    return(
        <>
        <div>
            <h1>당신의 이름을 알려주세요!</h1>
            <form onSubmit={handleSummit}>
                <input
                    type="text"
                    value={inputValue}
                    placeholder="입력해주세요"
                />
                <button type="submit">제출</button>
            </form>
            <h1>안녕하세요! {inputValue}님!</h1>
        </div>
        </>
    )
}