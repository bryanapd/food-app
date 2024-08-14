import React from "react";
import MealItem from "./MealItem";
import { Meal, Meals } from "@/types/meals";

const MealsGrid = ({ meals }: Meals) => (
  <ul className="w-[90%] max-w-[90rem] grid grid-cols-auto-fill-minmax gap-20 my-8 mx-auto list-none p-0">
    {(meals || []).map((meal) => (
      <li key={meal.id}>
        <MealItem {...meal} />
      </li>
    ))}
  </ul>
);

export default MealsGrid;
