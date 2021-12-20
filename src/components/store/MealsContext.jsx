import React, { useState, createContext } from "react";

export const MealsContext = createContext();

export const MealsProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  return (
    <MealsContext.Provider value={[cartItems, setCartItems]}>
      {props.children}
    </MealsContext.Provider>
  );
};
