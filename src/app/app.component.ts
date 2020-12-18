import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  
  <app-left></app-left>
  <app-right></app-right>
  `,
  styles: [`
  :host{  
    display:flex;
    justify-content: space-evenly;
  }
  `]
})
export class AppComponent {
  public title = 'Delvin Ortiz';
}