import React from "react";
import "./Nav.css"



const Nav = () => {
  return (
    <navbar className="navbar   text-white py-3">
    <div className="nav-link container-fluid justify-content-between align-items-center">
      <h3 className="m-0 align-items-center">Misk</h3>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="/myworks" >My Works</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/blog">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/aboutme">About Me</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-outline-primary" href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  </navbar>

  );
};

export default Nav;

