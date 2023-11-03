/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-success-subtle">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bolder" to="/">Food Food</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="d-flex">
                <Link to='/login'><button type="button" class="btn btn-success mx-1">Login</button></Link>
                <Link to='/signup'><button type="button" class="btn btn-success">SIgnUp</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
