import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css', '../../app.component.css']
})
export class CartCardComponent implements OnInit {

  @Input()
  title: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
