import * as RecipeActions from '../actions/recipes';
import { createReducer, on } from '@ngrx/store';
import { Recipe } from 'src/app/models/recipe';



export interface State {
  ids: number[];
  recipes: { [id: number]: Recipe };
  selected: number;
}

export const initialState: State = {
  ids: [1, 2],
  recipes: {
    1: {
      id: 1,
      title: 'Kartoshka s kotletoy',
      ingredients: [
        { name: 'onion', num: 1, unit: 'x' },
        { name: 'potato', num: 1, unit: 'kg' },
        { name: 'ground meat', num: 1, unit: 'kg' },
        { name: 'bread', num: 250, unit: 'g' },
        { name: 'breadcrumbs', num: 50, unit: 'g' },
        { name: 'butter', num: 80, unit: 'g' },
        { name: 'salt', num: 1, unit: 'tsp' },
      ],
      steps: [
        'Chop the onion',
        'Stir onion, bread and salt with ground meat',
        'Heat a frying pan with butter',
        'Form cutlets, roll in breading',
        'Fry for 7-8 minutes on each side',
        'Boil potatoes',
        'Mash with salt and butter',
      ],
      cooking_time: '1 - 1.5 hour',
    },
    2: {
      id: 2,
      title: 'Mock recipe',
      ingredients: [
        { name: 'mock1', num: 3, unit: 'x' },
        { name: 'mock2', num: 1, unit: 'kg' },
        { name: 'mock3', num: 200, unit: 'g' },
      ],
      steps: ['Mock step1', 'Mock step2', 'Mock step3'],
      cooking_time: 'Infinite',
    },
  },
  selected: 1,
};

export const recipesReducer = createReducer(
  initialState,
  on(RecipeActions.selectRecipe, (state, action) => {
    return {
      ...state,
      selected: action.payload,
    };
  })
);

export const getRecipes = (state: State) => state.recipes;
export const getSelected = (state: State) => state.selected;
