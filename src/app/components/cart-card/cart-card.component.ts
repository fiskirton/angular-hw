import { Component, Input, OnInit } from '@angular/core';
import { resetIngredients } from './../../store/actions/ingredients';
import { State } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css', '../../app.component.css'],
})
export class CartCardComponent implements OnInit {
  @Input()
  title: string | undefined;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {}

  onReset() {
    this.store.dispatch(resetIngredients())
  }
}
