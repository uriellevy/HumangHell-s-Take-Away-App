import React, { useContext } from "react";
import "./Modal.scss";
import { MealsContext } from "./store/MealsContext";

const Modal = ({ setCartIsShown }) => {
  const [cartItems, setCartItems] = useContext(MealsContext);

  const totalAmount = cartItems
    .reduce((acc, curr) => {
      return acc + curr.qty * curr.price;
    }, 0)
    .toFixed(2);
  console.log(totalAmount);

  const closeHandle = (e) => {
    setCartIsShown(false);
  };
  return (
    <div>
      <div className="backdrop" />
      <div className="modal">
        {cartItems.length === 0 ? (
          <h3>No items added</h3>
        ) : (
          cartItems.map((item) => (
            <div className="items" key={item.id}>
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
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
