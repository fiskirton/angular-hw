import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-card',
  templateUrl: './recipes-card.component.html',
  styleUrls: ['./recipes-card.component.css', '../../app.component.css'],
})
export class RecipesCardComponent implements OnInit {
  @Input()
  title: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
