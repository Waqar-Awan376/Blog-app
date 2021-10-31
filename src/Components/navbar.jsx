import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <NavLink to="/" className="nav-link" exact activeClassName="active">
              <img src="/Assets/logo.png" alt="LOGO_IMAGE" width="80" />
            </NavLink>
          </a>
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
                <NavLink
                  to="/"
                  className="nav-link"
                  exact
                  activeClassName="active"
                >
                  All Posts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/newpost"
                  className="nav-link"
                  activeClassName="active"
                >
                  All Posts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
