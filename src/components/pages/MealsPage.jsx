import React, { useContext } from "react";
import Header from "../Header";
import Modal from "../Modal";
import MealsSummary from "../Meals/MealsSummary";
import { MealsContext } from "../store/MealsContext";
import { availableMeals } from "../../mock-meals";
import "./MealsPage.scss";
import MealItem from "../Meals/MealItem";
import Gallery from "../Gallery";

const MealsPage = () => {
  const [cartItems, setCartItems, cartIsShown] = useContext(MealsContext);
  // console.log(cartIsShown);
  return (
    <div>
      {cartIsShown && <Modal />}
      <Header />
      <main>
        <MealsSummary />
        <section className="meals">
          {availableMeals.map((meal) => (
            <MealItem
              key={meal.id}
              price={meal.price}
              description={meal.description}
              name={meal.name}
              meal={meal}
            />
          ))}
        </section>
        <Gallery />
      </main>
    </div>
  );
};

export default MealsPage;
