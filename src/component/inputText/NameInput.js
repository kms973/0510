import { useState } from "react";


export default function NameInput(props){

    const [inputValue, setInputValue] = useState("");
    const [submitted, setSubmitted] = useState();

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function handleSummit(event){
        event.preventDefault();
        setInputValue('');
        setSubmitted(inputValue);
    }

    return(
        <>
        <div>
            <h1>당신의 이름을 알려주세요!</h1>
            <form onSubmit={handleSummit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="입력해주세요"
                />
                <button type="submit">제출</button>
            </form>
            {submitted && <h1>안녕하세요! {submitted}님!</h1>}
        </div>
        </>
    )
}