import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <app-left [class] = "appLeftClass"></app-left>
    <app-right></app-right>
  `,
  styles: [`
    .left{
      float:left
    }
  `]
})
export class AppComponent {
  public title = 'Delvin Ortiz';
  public appLeftClass = ".left"
}
