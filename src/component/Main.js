import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
    return <>
    <h2><Link to="">link1</Link></h2>
    <h2><Link to="/button">더하기빼기버튼</Link></h2>
    <h2><Link to="/name">이름알려주세요</Link></h2>
    </>
}