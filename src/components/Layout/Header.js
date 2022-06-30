import React, { Fragment } from "react";

import mealsImage from "../../assets/meals.jpeg";
import styles from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = props => {
 
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick = {props.onShowCart}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
