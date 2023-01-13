import React from "react";

import classes from "./HeaderCartButton.module.css";
import cartIcon from "../../assets/cartIconFantesy.webp";

const HeaderCartButton = (props) => {
  return (
    <div className={classes.button}>
      <img className={classes.icon} src={cartIcon} alt="cart_icon" />
      <button type="button">Your Cart</button>
      <div className={classes.badge}>0</div>
    </div>
  );
};

export default HeaderCartButton;
