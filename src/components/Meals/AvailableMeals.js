import React, { useState, useEffect, useCallback } from "react";
import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMealsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://movie-database-c5c02-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      // console.log(`content of the "data" constant: ${data}`);

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          description: data[key].description,
          id: key,
          name: data[key].name,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMealsHandler();
  }, [fetchMealsHandler]);

  let content = <p>Found no meals</p>;
  let mealsList = [];

  if (meals.length > 0) {
    mealsList = meals.map((meal) => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  // console.log(mealsList);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
      {error && <section className={classes.error}>{content}</section>}
    </section>
  );
};

export default AvailableMeals;
