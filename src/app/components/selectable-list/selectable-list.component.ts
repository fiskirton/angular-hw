import { Recipe } from './../../models/recipe';
import { selectRecipe } from './../../store/actions/recipes';
import { getRecipesValues } from './../../store/reducers/index';
import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-selectable-list',
  templateUrl: './selectable-list.component.html',
  styleUrls: ['./selectable-list.component.css'],
})
export class SelectableListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private store: Store<State>) {
    this.recipes = []
  }

  ngOnInit(): void {
    this.store.select(getRecipesValues).subscribe((recipes) => (this.recipes = recipes))
  }

  onSelect(id: number) {
    this.store.dispatch(selectRecipe({payload: id}))
  }
}
