import { Ingredient } from './../../models/ingredient';
import { createAction, props } from '@ngrx/store';

export const updateIngredients = createAction(
  '[Ingredients] Update',
  props<{ payload: Ingredient[] }>()
);

export const resetIngredients = createAction(
  '[Ingredients] Reset',
)
