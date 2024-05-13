import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "./styled";

export default function Header(){
    return <>
 <Nav className="justify-content-center">
      <NavItem>
        <NavLink><Link to="/">Home</Link></NavLink>
      </NavItem>
      <NavItem>
        <NavLink><Link to="/button">Game</Link></NavLink>
      </NavItem>
      <NavItem>
        <NavLink><Link to="/name">ToDoList</Link></NavLink>
      </NavItem>
      </Nav>

    </>
}