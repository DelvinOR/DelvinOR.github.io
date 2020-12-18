import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  template:`

  <div>Delvin Ortiz</div>
  
  `,
  styles: [`
    :host{
      background-color: #FFE4C4;
    }
  }`]
})
export class LeftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
