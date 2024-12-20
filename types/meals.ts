export interface Meal {
  id: number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  creator_email?: string;
  instructions: string;
}

export interface Meals {
  meals: Meal[];
}
