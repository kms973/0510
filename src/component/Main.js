import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
    return <>
    <h2><Link to="/json">link1</Link></h2>
    <h2><Link to="/button">간단한게임</Link></h2>
    <h2><Link to="/name">TODO-LIST</Link></h2>
    </>
}