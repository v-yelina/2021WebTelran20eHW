import React, { useContext } from "react";
import { GlobalContext } from "../data/GlobalContextProvider";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { noActive } = useContext(GlobalContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                exact={true}
                className="nav-link"
                onClick={() => {
                  noActive();
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/todos"
                className="nav-link"
                onClick={() => {
                  noActive();
                }}
              >
                Todo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/posts"
                className="nav-link"
                onClick={() => {
                  noActive();
                }}
              >
                Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/albums"
                className="nav-link"
                onClick={() => {
                  noActive();
                }}
              >
                Albums
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
