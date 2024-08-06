import React from "react";
import MealItem from "./MealItem";

interface Meal {
  id: number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

interface Props {
  meals?: Meal[];
}
const MealsGrid = ({ meals }: Props) => (
  <ul>
    {(meals || []).map((meal) => (
      <li key={meal.id}>
        <MealItem {...meal} />
      </li>
    ))}
  </ul>
);

export default MealsGrid;

// .meals {
//     width: 90%;
//     max-width: 90rem;
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
//     grid-gap: 5rem;
//     margin: 2rem auto;
//     list-style: none;
//     padding: 0;
//   }
