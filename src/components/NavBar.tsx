import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="App-navbar">
            <ul>
                <li>
                    <NavLink to="/" activeClassName="activeNavLink" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="activeNavLink">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/crud" activeClassName="activeNavLink">
                        CRUD
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/subroutes" activeClassName="activeNavLink">
                        Subroutes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/props" activeClassName="activeNavLink">
                        Props
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" activeClassName="activeNavLink">
                        Log In
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
