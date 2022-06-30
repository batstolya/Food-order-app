import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCardButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCardButton = (props) => {

  const context = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const btnHandler = `${styles.button} ${isOpen? styles.bump: ''}`

  useEffect(() => {
    if(context.items.length === 0) {
      return;
    }
    setIsOpen(true)

    const timer = setTimeout(() => {
    setIsOpen(false)

    }, 300)

    return () => {
      clearTimeout(timer)
    }

  }, [context.items])

  return (
    <button className={btnHandler} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={styles.badge}>
        {context.items.reduce((prev, val) => {
          return prev + val.amount;
        }, 0)}
      </span>
    </button>
  );
};

export default HeaderCardButton;
