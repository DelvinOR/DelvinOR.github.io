import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  template:`

  <div class = "left">Portfolio</div>
  <hr style = "border-color:#D3D3D3">
  `,
  styles: [`
    .left{
      text-align: left;
      font-size: 180%;
      font-family: "Times New Roman", sans-serif;
      font-weight: bold;
    }

    .text{
      font-size = 15px;
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
