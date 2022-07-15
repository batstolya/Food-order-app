import React, { useContext } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const context = useContext(CartContext);

  let totalAmount = `$${context.totalAmount.toFixed(2)}`;
  let hasItems = context.items.length > 0;

  const cartItemRemoveHandler = (id) => {

    context.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    context.addItem({...item, amount: 1})

  };
  const cartItem = (
    <ul className={styles["cart-items"]}>
      {context.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove = {cartItemRemoveHandler.bind(null, item.id)}
          onAdd = {cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Orders</button>}
      </div>
    </Modal>
  );
};
export default Cart;
