import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  template:`

  <div class = "left">Porfolio</div>
  <hr style = "border-color:#D3D3D3">
  `,
  styles: [`
    .left{
      text-align: left;
      font-size: 150%;
      font-family: Arial, sans-serif;
      font-weight: bold;
    }

    .text{
      font-size = 15px;
    }

    :host{
      flex-shrink: 1;
      width: 30%;
    }
  `]
})
export class RightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
