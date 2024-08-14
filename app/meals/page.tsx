import React, { Suspense } from "react";
import Link from "next/link";

import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Meal as MealType } from "@/types/meals";

const Meals = async () => {
  const meals = (await getMeals()) as MealType[];
  return <MealsGrid meals={meals} />;
};

const MealsPage = async () => {
  return (
    <>
      <header className="w-[90%] max-w-6xl text-[#ddd6cb] mt-12 mb-0 ml-16 mr-auto">
        <h1 className="text-4xl font-bold font-montserrat mb-6">
          Delicious meals, created{" "}
          <span className="bg-gradient-text text-gradient">by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p>
          <Link
            className="inline-block mt-4 py-2 px-4 rounded-lg text-white font-bold bg-gradient-text hover:bg-gradient-text-hover active:bg-gradient-text-hover"
            href="/meals/share"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main>
        <Suspense
          fallback={
            <p className="text-center animate-loading">Fetching meals...</p>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
