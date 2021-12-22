import React from "react";
import "./Header.scss";
import Button from "./Button";
import mealsImage from "../assets/header.jpg";
import NavBar from "./NavBar";
const Header = ({ setCartIsShown }) => {
  return (
    <>
      <header className="header">
        <NavBar />
        <Button setCartIsShown={setCartIsShown}>Cart</Button>
      </header>

      <div className="main-image">
        <img src={mealsImage} alt="delicious food" />
      </div>
    </>
  );
};

export default Header;
