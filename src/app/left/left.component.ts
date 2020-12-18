import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  template:`

  <div class = "left">Delvin Ortiz</div>
  <br>
  <div>
    <p class = "paragraph">Welcome to my portfolio! My name is Delvin Ortiz
    I am a reject graduate from Rutgers University</p>
  </div>
  `,
  styles: [`
    .left{
      text-align: left;
      font-size: 150%;
      font-family: Arial, sans-serif;
      font-weight: bold;
      color: #6495ED;
    }
    .paragraph{
      text-align:left;
      font-size 20px;
      font-family: Arial, sans-serif;
    }
    :host{
      flex-shrink: 1;
    }
  `]
})
export class LeftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
