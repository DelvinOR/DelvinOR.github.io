import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div [class] = "displayClass">
    <app-left class = "left"></app-left>
    <app-right class = "right"></app-right>
  </div>
  `,
  styles: [`
    .disp-container{
      display: flex;
      justify-content: space-between;
      background-color: #F0F8FF;
    }

    .left{
      flex-grow: 1;
    }

    .right{
      flex-grow: 1;
    }
  `]
})
export class AppComponent {
  public title = 'Delvin Ortiz';
  public displayClass = ".disp-container";
}
