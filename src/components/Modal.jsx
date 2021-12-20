import React, { useContext } from "react";
import "./Modal.scss";
import { MealsContext } from "./store/MealsContext";

const Modal = ({ setCartIsShown }) => {
  const [cartItems, setCartItems, meals] = useContext(MealsContext);

  const totalAmount = cartItems
    .reduce((acc, curr) => {
      return acc + curr.qty * curr.price;
    }, 0)
    .toFixed(2);
  console.log(totalAmount);

  const closeHandle = (e) => {
    setCartIsShown(false);
  };

  const onAdd = (meal) => {
    const exist = cartItems.find((x) => x.id === meal.id);
    // console.log(exist);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === meal.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...meal, qty: 1 }]);
    }
  };

  const onRemove = (meal) => {
    const exist = cartItems.find((x) => x.id === meal.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== meal.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === meal.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <div className="backdrop" />
      <div className="modal">
        {cartItems.length === 0 ? (
          <h3>No items added</h3>
        ) : (
          cartItems.map((meal) => (
            <div className="modal-items" key={meal.id}>
              <div className="modal-left">
                <h3>{meal.name}</h3>
                <div className="modal-price">
                  <h4>${meal.price * meal.qty.toFixed(2)}</h4>
                  <div className="modal-amount">x{meal.qty}</div>
                </div>
              </div>
              <div className="modal-right">
                <button onClick={() => onRemove(meal)}>-</button>
                <button onClick={() => onAdd(meal)}>+</button>
              </div>
            </div>
          ))
        )}
        <div className="total">
          <span>Total Amount</span>
          <span>${totalAmount}</span>
        </div>
        <div className="actions">
          <button className="button--alt" onClick={closeHandle}>
            Close
          </button>
          <button className="button">Order</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
