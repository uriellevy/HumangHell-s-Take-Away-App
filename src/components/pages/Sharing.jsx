import React, { useContext } from "react";
import Header from "../Header";
import Modal from "../Modal";
import { MealsContext } from "../store/MealsContext";
import { availableSharing } from "../../mock-meals";
import "../pages/MealsPage.scss";
import MealItem from "../Meals/MealItem";

const Sharing = () => {
  const [cartItems, setCartItems, cartIsShown, setCartIsShown] =
    useContext(MealsContext);
  // console.log(cartIsShown);
  return (
    <div>
      {cartIsShown && <Modal setCartIsShown={setCartIsShown} />}
      <Header setCartIsShown={setCartIsShown} />
      <main>
        <section className="meals">
          {availableSharing.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              price={meal.price}
              description={meal.description}
              name={meal.name}
              meal={meal}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Sharing;
