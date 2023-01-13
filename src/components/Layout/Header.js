import React, { Fragment } from "react";

import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Miner's Tavern</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes.main_image}>
        <img src={mealsImage} alt="banner_image" />
      </div>
    </Fragment>
  );
};

export default Header;
