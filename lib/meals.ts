import { Meal } from "@/types/meals";
import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async (): Promise<Meal[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all() as Meal[];
};
