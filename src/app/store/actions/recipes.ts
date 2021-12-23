import { createAction, props } from '@ngrx/store';

export const selectRecipe = createAction(
  '[Recipes] Select',
  props<{ payload: number }>()
);
