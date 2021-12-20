import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-receips-card',
  templateUrl: './receips-card.component.html',
  styleUrls: ['./receips-card.component.css', '../../app.component.css']
})
export class ReceipsCardComponent implements OnInit {

  @Input()
  title: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
