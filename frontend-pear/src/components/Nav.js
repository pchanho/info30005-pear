import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Style from "../style.css";

export default function Nav() {
    return (
        <div className='Nav-bar'>
            <h2 id="nav-logo-text">Pear</h2>
            <nav>
                <NavLink exact to="/">Home</NavLink>

                <NavLink to="/conversation">Conversation</NavLink>

                <NavLink to="/account">Sign In</NavLink>
            </nav>
        </div>
    );
}
