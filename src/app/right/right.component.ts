import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  template:`

  <div class = "left">Porfolio</div>
  <hr>
  `,
  styles: [`
    .left{
      text-align: left;
      font-size: 150%;
      font-family: Arial, sans-serif;
      font-weight: bold;
    }
    :host{
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 1;
    }
  `]
})
export class RightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
