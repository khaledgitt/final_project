import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./nav.css";

const NavBar = () => {
  return (
    <div>
      <Navbar className="bar" variant="dark">
        <div className="form">
          <div className="nav">
            <div className="nav_link">
              <Link to="/">Games</Link>
              <Link to="/film">Film</Link>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
