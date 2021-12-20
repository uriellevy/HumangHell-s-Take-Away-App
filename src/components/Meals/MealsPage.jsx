import React, { useState } from "react";
import Header from "../Header";
import Modal from "../Modal";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const MealsPage = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  // console.log(cartIsShown);
  return (
    <div>
      {cartIsShown && <Modal setCartIsShown={setCartIsShown} />}
      <Header setCartIsShown={setCartIsShown} />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </div>
  );
};

export default MealsPage;
