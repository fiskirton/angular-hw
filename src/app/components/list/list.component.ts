import { Component, Input, OnInit } from '@angular/core';
import { getIngredients } from 'src/app/store/reducers/index';
import { Ingredient } from 'src/app/models/ingredient';
import { State } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  ingredients: Ingredient[];

  @Input()
  title: string | undefined;

  constructor(private store: Store<State>) {
    this.ingredients = []
  }

  ngOnInit(): void {
    this.store.select(getIngredients).subscribe((ingredients) => (this.ingredients = ingredients))
  }
}
