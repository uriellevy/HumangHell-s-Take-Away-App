import React, { useContext } from "react";
import Header from "../Header";
import Modal from "../Modal";
import { MealsContext } from "../store/MealsContext";
import { availableSoftDrinks } from "../../mock-meals";
import "../pages/MealsPage.scss";
import MealItem from "../Meals/MealItem";

const Drinks = () => {
  const [cartItems, setCartItems, cartIsShown] = useContext(MealsContext);
  return (
    <div>
      {cartIsShown && <Modal />}
      <Header />
      <section className="summary">
        <h3>All our drinks comes in 330 ml bottles</h3>
        <p>54 Abbey Road, London, UK</p>
      </section>
      <main>
        <section className="meals">
          {availableSoftDrinks.map((meal) => (
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

export default Drinks;
