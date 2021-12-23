import React, { useContext } from "react";
import Header from "../Header";
import Modal from "../Modal";
import { MealsContext } from "../store/MealsContext";
import { availableSharing } from "../../mock-meals";
import "../pages/MealsPage.scss";
import MealItem from "../Meals/MealItem";

const Sharing = () => {
  const [cartItems, setCartItems, cartIsShown] = useContext(MealsContext);
  // console.log(cartIsShown);
  return (
    <div>
      {cartIsShown && <Modal />}
      <Header />
      <section className="summary">
        <h3>All our shared meals comes with 3 types of sauces</h3>
        <p>54 Abbey Road, London, UK</p>
      </section>
      <main>
        <section className="meals">
          {availableSharing.map((meal) => (
            <MealItem
              key={meal.id}
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
