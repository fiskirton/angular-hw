import * as IngredientActions from '../actions/ingredients';
import { createReducer, on } from '@ngrx/store';
import { Ingredient } from './../../models/ingredient';

export interface State {
  ingredients: Ingredient[];
}

export const initialState: State = {
  ingredients: [],
};

const updateIngredientsList = (
  ingredientsInitial: Ingredient[],
  ingredientsNew: Ingredient[]
): Ingredient[] => {
  if (!ingredientsInitial.length) {
    return ingredientsNew;
  } else {
    let allIngredients: Ingredient[] =
      ingredientsInitial.concat(ingredientsNew);
    return allIngredients.reduce(
      ((map) => (r: Ingredient[], a) => {
        map.set(
          a.name,
          map.get(a.name) || r[r.push({ ...a, name: a.name, num: 0 }) - 1]
        );
        map.get(a.name).num += a.num;
        return r;
      })(new Map()),
      []
    );
  }
};

export const ingredientsReducer = createReducer(
  initialState,
  on(IngredientActions.updateIngredients, (state, action) => ({
    ...state,
    ingredients: updateIngredientsList(state.ingredients, action.payload),
  })),
  on(IngredientActions.resetIngredients, (state) => ({
    ...state,
    ingredients: []
  }))
);

export const getIngredients = (state: State) => state.ingredients;
