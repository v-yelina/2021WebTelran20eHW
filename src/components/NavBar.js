import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" exact={true} className="navlink">
        Product List
      </NavLink>
      <NavLink to="/admin" className="navlink">
        Admin Panel
      </NavLink>
    </nav>
  );
};

export default NavBar;
