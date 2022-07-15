import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  return (
    <div>
      <nav
        style={{
          background: "#333",
        }}
      >
        <ul>
          <li>
            <Link to="/">
              <p className="nav-link">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/postsrq">
              <p className="nav-link">Posts With RQ</p>
            </Link>
          </li>
          <li>
            <Link to="/posts">
              <p className="nav-link">Posts Without RQ</p>
            </Link>
          </li>
          <li>
            <Link to="/invoices">
              <p className="nav-link">Invoices</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
