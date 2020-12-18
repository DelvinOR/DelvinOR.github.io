import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  template:`

  <div>Porfolio</div>
  
  `,
  styles: [`
  :host{  
    display:flex;
    justify-content: space-between;
  }`]
})
export class RightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
