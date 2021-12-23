import { Component, OnInit } from '@angular/core';
import { getSelectedRecipe } from './../../store/reducers/index';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from './../../models/recipe';
import { selectRecipe } from './../../store/actions/recipes';
import { State } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { updateIngredients } from 'src/app/store/actions/ingredients';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css', '../../app.component.css'],
})
export class MealCardComponent implements OnInit {
  selectedRecipe!: Recipe;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store
      .select(getSelectedRecipe)
      .subscribe((recipe) => (this.selectedRecipe = recipe));
  }

  onClick(ingredients: Ingredient[]) {
    this.store.dispatch(updateIngredients({ payload: ingredients }));
  }
}
