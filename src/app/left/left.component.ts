import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  template:`

  <div>Delvin Ortiz</div>
  
  `,
  styles: [`
  :host{  
    display:flex;
    justify-content: space-between;
  }`]
})
export class LeftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
