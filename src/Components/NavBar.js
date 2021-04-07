import React from "react";
import avatar from "../img/avatar.jpg";
import { NavLink } from "react-router-dom";
function NavBar({click}) {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="" />
        </div>
        <ul className="nav-items" onClick={click}>
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" exact activeClassName="active">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/experience" exact activeClassName="active">
            Experience
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" exact activeClassName="active">
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
           <a href="https://github.com/bomercakmak" target="_blank" rel="noreferrer"> Copyright &copy; {new Date().getFullYear()} {<br/>} Bahadir Omer Cakmak </a>
        </footer>
      </nav>
    </div>
  );
}

export default NavBar;
