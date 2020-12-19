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
      flex-shrink: 1;
      width: 40%;
    }
  `]
})
export class RightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
