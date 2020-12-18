import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div [class] = "displayClass">
    <app-left></app-left>
    <app-right></app-right>
  </div>
  `,
  styles: [`
    .disp-flex{
      display: flex;
      background-color: #F0F8FF
    }
  `]
})
export class AppComponent {
  public title = 'Delvin Ortiz';
  public displayClass = ".disp-flex"
}
