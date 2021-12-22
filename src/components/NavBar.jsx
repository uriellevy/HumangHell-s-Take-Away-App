import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdSegment, MdClose } from "react-icons/md";
import { FaBeer, FaHamburger } from "react-icons/fa";
import { GiKnifeFork, GiWaterBottle } from "react-icons/gi";
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
          <FaHamburger size="2rem" />
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-text">
          <GiKnifeFork size="2rem" />
          <NavLink to="/sharing">Sharing</NavLink>
        </li>
        <li className="nav-text">
          <GiWaterBottle size="2rem" />
          <NavLink to="/drinks">Soft Drinks</NavLink>
        </li>
        <li className="nav-text">
          <FaBeer size="2rem" />
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
