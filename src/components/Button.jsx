import React, { useContext } from "react";
import "./Button.scss";
import { MdAddShoppingCart } from "react-icons/md";
import { MealsContext } from "./store/MealsContext";

const Button = ({ setCartIsShown }) => {
  const [cartItems, setCartItems] = useContext(MealsContext);
  const totalCartItems = cartItems.reduce((acc, curr) => {
    return acc + curr.qty;
  }, 0);

  const openModalHandle = () => {
    setCartIsShown(true);
  };

  return (
    <button className="button" onClick={openModalHandle}>
      <span className="icon">
        <MdAddShoppingCart size="2rem" color="white" />
      </span>
      <span className="button-text">Your Cart</span>
      <span className="badge ">{totalCartItems}</span>
    </button>
  );
};

export default Button;
