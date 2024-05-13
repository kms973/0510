import { useState } from "react";


export default function NameInput() {

    const [inputValue, setInputValue] = useState("");
    const [submitted, setSubmitted] = useState([]);

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function handleSummit(event) {
        event.preventDefault();
        setInputValue('');
        setSubmitted(prevSubmitted => [...prevSubmitted, inputValue]);
    }

    function handleDelete(index) {
        setSubmitted(prevSubmitted => {
            const updatedSubmitted = [...prevSubmitted];
            updatedSubmitted.splice(index, 1);
            return updatedSubmitted;
        });
    }

    return (
        <>
            <div className="center">
                <h1>할 일 등록하기!</h1>
                <form onSubmit={handleSummit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="입력해주세요"
                    />
                    <button type="submit">제출</button>
                </form>
                {submitted.map((item, index) => (
                    <div key={index}>

                        <p>{item}</p>
                        <button onClick={() => handleDelete(index)}>삭제</button>
                    </div>
                ))}
            </div>
        </>
    )
}