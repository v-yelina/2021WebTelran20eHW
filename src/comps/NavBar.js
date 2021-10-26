import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" exact={true} className="navLink">
        Home
      </NavLink>
      <NavLink to="/admin" className="navLink">
        Admin Panel
      </NavLink>
      <NavLink to="/leaderboards" className="navLink">
        Leaderboard
      </NavLink>
    </nav>
  );
};

export default NavBar;
