import * as Ingredients from './ingredients';
import * as Recipes from './recipes';
import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';


export interface State {
  recipes: Recipes.State;
  ingredients: Ingredients.State;
}

export const reducers: ActionReducerMap<State> = {
  recipes: Recipes.recipesReducer,
  ingredients: Ingredients.ingredientsReducer,
};

export const getRecipeState = createFeatureSelector<Recipes.State>('recipes');

export const getRecipes = createSelector(getRecipeState, Recipes.getRecipes);

export const getSelected = createSelector(getRecipeState, Recipes.getSelected);

export const getSelectedRecipe = createSelector(
  getSelected,
  getRecipes,
  (id, recipes) => {
    return {
      ...recipes[id],
    };
  }
);

export const getRecipesValues = createSelector(getRecipes, (recipes) => {
  let values = Object.values(recipes);
  return [...values];
});

export const getIngredientState =
  createFeatureSelector<Ingredients.State>('ingredients');

export const getIngredients = createSelector(
  getIngredientState,
  Ingredients.getIngredients
);
