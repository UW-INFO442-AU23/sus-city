import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">X-Scape</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Search" className="nav-link">Search</Link>
              </li>
              <li className="nav-item">
                <Link to="/Quiz" className="nav-link">Quiz</Link>
              </li>
              <li className="nav-item">
                <Link to="/Compare" className="nav-link">Compare</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <p>Contact Info: INFO442 23au Group 2</p>
          <p>
            &copy; {new Date().getFullYear()} Yifei Tao, Stephanie Wang, Arianna Khan, Cici Zhao, Ethan Wang. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Navbar;
