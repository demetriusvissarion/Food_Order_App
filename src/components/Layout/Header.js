import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Miner's Tavern</h1>
        <HeaderCartButton onClick={props.onShowCartHandler} />
      </header>
      <div className={classes.main_image}>
        <img src={mealsImage} alt="banner_image" />
      </div>
    </Fragment>
  );
};

export default Header;
