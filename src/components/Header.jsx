import React, { useContext } from "react";
import "./Header.scss";
import { MealsContext } from "../components/store/MealsContext";
import Button from "./Button";
import mealsImage from "../assets/header.jpg";
import NavBar from "./NavBar";
const Header = () => {
  const [cartItems, setCartItems, cartIsShown, setCartIsShown] =
    useContext(MealsContext);
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
