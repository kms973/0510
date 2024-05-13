import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return <>
    <h1>Header</h1>
    <h2><Link to="/">Home</Link></h2>
    </>
}