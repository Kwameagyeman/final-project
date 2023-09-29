import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="title">
        Snap Store
      </Link>

      <ul>
        <li>
          <NavLink to="/products">AllProducts</NavLink>
        </li>
        <li>
          <NavLink to="/account">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">SignUp</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
