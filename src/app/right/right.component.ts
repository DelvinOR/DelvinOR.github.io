import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  template:`

  <div>Porfolio</div>
  
  `,
  styles: [`
    :host{
      background-color: #FFE4C4;
    }
  `]
})
export class RightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
