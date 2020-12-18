import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Delvin Ortiz</title>
  </head>

  <body style = "background-color: #F0F8FF;">
    <div [class] = "displayClass">
      <app-left class = "left"></app-left>
      <app-right class = "right"></app-right>
    </div>
  </body>

  </html>
  `,
  styles: [`
    .disp-container{
      display: flex;
      justify-content: space-between;
    }

    .left{
      border-style: dotted;
      flex-grow: 1;
    }

    .right{
      border-style: dotted;
      flex-grow: 1;
    }
  `]
})
export class AppComponent {
  public title = 'Delvin Ortiz';
  public displayClass = ".disp-container";
}
