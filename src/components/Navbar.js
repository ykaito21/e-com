import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="navbar-brand"
            style={{ width: "40px", height: "40px" }}
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Product
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button>
            <FontAwesomeIcon icon={faCartPlus} />
            My Cart
          </button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
