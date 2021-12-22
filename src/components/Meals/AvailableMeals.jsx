// DELETE

import React from "react";
import { availableMeals } from "../../mock-meals.js";
import "./AvailableMeals.scss";
import MealItem from "./MealItem";

const AvailableMeals = () => {
  // console.log(meals);

  return (
    <section className="meals">
      {availableMeals.map((meal) => (
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
  );
};

export default AvailableMeals;
