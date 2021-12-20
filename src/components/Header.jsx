import React from "react";
import "./Header.scss";
import Button from "./Button";
import mealsImage from "../assets/header.jpg";

const Header = ({ setCartIsShown }) => {
  return (
    <>
      <header className="header">
        <h1>Food Order App</h1>
        <Button setCartIsShown={setCartIsShown}>Cart</Button>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="delicious food" />
      </div>
    </>
  );
};

export default Header;
