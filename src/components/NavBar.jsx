import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdSegment } from "react-icons/md";
import { MdClose } from "react-icons/md";
import "./NavBar.scss";
const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  // console.log(sidebar);

  return (
    <>
      <div className="menu-bars" onClick={showSidebar}>
        <MdSegment size="2.5rem" />
      </div>

      <ul className={sidebar ? "nav-menu active " : "nav-menu"}>
        <div className="menu-bars" onClick={showSidebar}>
          <MdClose size="2.5rem" />
        </div>
        <li className="nav-text">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-text">
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li className="nav-text">
          <NavLink to="/sharing">Sharing</NavLink>
        </li>
        <li className="nav-text">
          <NavLink to="/drinks">Soft Drinks</NavLink>
        </li>
        <li className="nav-text">
          <NavLink to="/alcohol">Alcohol</NavLink>
        </li>
      </ul>

      {/* <div className="navbar">
        <NavLink to="#" className="menu-bars">
          <MdSegment onClick={showSidebar} />
        </NavLink>
      </div> */}
      {/* <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <NavLink to="#" className="menu-bars">
              <MdClose />
            </NavLink>
          </li>
          <li className="nav-text">
            <NavLink to="#">dffdsf</NavLink>
          </li>
          <li className="nav-text">
            <NavLink to="#">dffdsf</NavLink>
          </li>
          <li className="nav-text">
            <NavLink to="#">dffdsf</NavLink>
          </li>
          <li className="nav-text">
            <NavLink to="#">dffdsf</NavLink>
          </li>
        </ul>
      </nav> */}
    </>
  );
};

export default NavBar;
