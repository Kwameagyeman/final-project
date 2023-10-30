import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { ShoppingCart } from "phosphor-react";

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
        <li>
          <NavLink to="/cart">
            <ShoppingCart size={30} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
