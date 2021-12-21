import React, { useContext, useState, useEffect } from "react";
import "./Modal.scss";
import { MealsContext } from "./store/MealsContext";
import { MdCheckCircleOutline } from "react-icons/md";
import RingLoader from "react-spinners/RingLoader";

const Modal = ({ setCartIsShown }) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useContext(MealsContext);

  const orderedHandle = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    setIsOrdered(true);
  };
  // console.log(isOrdered);

  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 4000);
  //   setIsOrdered(true);
  // }, []);

  console.log(isOrdered);

  const totalAmount = cartItems
    .reduce((acc, curr) => {
      return acc + curr.qty * curr.price;
    }, 0)
    .toFixed(2);
  // console.log(totalAmount);

  const closeHandle = (e) => {
    setCartIsShown(false);
    if (isOrdered) {
      setCartItems([]);
    }
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
      {isLoading ? (
        <RingLoader
          color={"#fff"}
          loading={isLoading}
          size={100}
          className="spinner"
        />
      ) : (
        <div className="modal">
          {cartItems.length === 0 && <h3>No items added</h3>}

          <div className="container">
            {cartItems.length > 0 && isOrdered ? (
              <div className="modal-success">
                <MdCheckCircleOutline className="modal-icon" />

                <div className="success-text">
                  <p>Awesome!</p>
                  <p>Your order is accepted</p>
                </div>
                <div>
                  <ul className="success-details">
                    {cartItems.map((meal) => (
                      <li className="success-items" key={meal.id}>
                        {meal.qty} x {meal.name}: ${meal.price * meal.qty}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="ready-text">
                  Your order w'll be ready to take away in 20 min
                </p>
              </div>
            ) : (
              cartItems.map((meal) => (
                <div className="modal-items" key={meal.id}>
                  <div className="modal-left">
                    <h3>{meal.name}</h3>
                    <div className="modal-price">
                      <h4>${meal.price * meal.qty.toFixed(2)}</h4>
                      <div className="modal-amount">x {meal.qty}</div>
                    </div>
                  </div>
                  <div className="modal-right">
                    <button onClick={() => onRemove(meal)}>-</button>
                    <button onClick={() => onAdd(meal)}>+</button>
                  </div>
                </div>
              ))
            )}

            <div className={isOrdered ? "total completed" : "total"}>
              <span>Total Amount</span>
              <span>${totalAmount}</span>
            </div>
            <div className="actions">
              <button
                className={isOrdered ? "close-btn-completed" : "close-btn"}
                onClick={closeHandle}
              >
                Close
              </button>
              <button
                onClick={orderedHandle}
                className={isOrdered ? "disabled" : "button"}
              >
                Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
