import { Ingredient } from './ingredient';

export interface Recipe {
  id: number;
  title: string;
  ingredients: Ingredient[];
  steps: string[];
  cooking_time: string;
}
