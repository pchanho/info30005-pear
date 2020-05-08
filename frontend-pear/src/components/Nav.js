import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <NavLink exact to="/">
                Home
            </NavLink>

            <NavLink to="/account">
                Sign In
            </NavLink>

            <NavLink to="/conversation">
                Conversation
            </NavLink>
        </nav>
    );
}
