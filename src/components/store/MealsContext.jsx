import React, { useState, createContext } from "react";
import meals from "../../mock-meals";

export const MealsContext = createContext();

export const MealsProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  return (
    <MealsContext.Provider value={[cartItems, setCartItems, meals]}>
      {props.children}
    </MealsContext.Provider>
  );
};
