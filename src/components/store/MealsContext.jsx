import React, { useState, createContext } from "react";

export const MealsContext = createContext();

export const MealsProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartIsShown, setCartIsShown] = useState(false);
  // console.log(cartItems);

  return (
    <MealsContext.Provider
      value={[cartItems, setCartItems, cartIsShown, setCartIsShown]}
    >
      {props.children}
    </MealsContext.Provider>
  );
};
