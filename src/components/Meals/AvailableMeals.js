import React, { useState, useEffect, useCallback } from "react";
import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Data from "./dummy-data";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // set to null because later might become something else

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      setError(null);

      // Fetch existing meals from firebase
      // const response = await fetch(
      //   "https://food-order-app-4f64b-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      // );

      // if (!response.ok) {
      //   throw new Error("Something went wrong!");
      // }
      //

      // const data = await response.json();

      const data = Data;

      const loadedMeals = [];

      // Extract meal details from the firebase data
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      // delay test = Start
      function timeout(delay) {
        return new Promise((res) => setTimeout(res, delay));
      }
      await timeout(1000); // 1000 = 1 sec delay
      // delay test = End

      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  // Send order to firebase
  // async function sendOrderHandler(order) {
  //   const response = await fetch(
  //     "https://food-order-app-4f64b-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(order),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // }

  // Error handling
  let content = <p>Found no meals</p>;
  let mealsList = [];

  if (isLoading) {
    content = (
      <section>
        <p className={classes.loading}>Loading...</p>;
        <p className={classes.loader}>.</p>;
      </section>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (meals.length > 0) {
    mealsList = meals.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  }

  // console.log(mealsList);

  return (
    <section className={classes.meals}>
      {isLoading && (
        <section>
          <div className={classes.loading_container}>
            <p className={classes.loading}>Loading...</p>;
            <p className={classes.loader}>.</p>;
          </div>
        </section>
      )}
      <Card>
        <ul>{mealsList}</ul>
      </Card>
      {error && <section className={classes.error}>{content}</section>}
    </section>
  );
};

export default AvailableMeals;
