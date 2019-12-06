import React from 'react';

import logo from "../assets/icons/Brandlogo.png";

function Header() {
  return (
    <>
        <div className="header">
          <img src={logo} className="barnd-logo" alt="logo" />
          <div className="brandName">
            Force Management System (<span className="brandcolor">v</span>FMS)
          </div>
        </div>
      <nav className="navbar navbar-expand-sm   navbar-inverse">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Force Management System{" "}
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
    </>
  );
}

export default Header;
