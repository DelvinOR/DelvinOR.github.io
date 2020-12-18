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
  }
  `]
})
export class AppComponent {
  public title = 'Delvin Ortiz';
}
