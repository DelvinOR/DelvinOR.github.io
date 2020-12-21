import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  template:`

  <h2 class = "category">Portfolio</h2>
  <hr style = "border-color:#D3D3D3">

  <div>
    <h2 class = "project-type">Android App</h2>
    <br>
    <a class = "project" href = "https://github.com/DelvinOR/distance-conversion-app" target = "_blank">Distance Converter: application used to change units of distance</a>
    <br>
    <div class = "pictures">
      <img class = "picture" src = "assets/images/project_1/Screenshot_one.png" alt = "Project 1 screenshot_1">
      <img class = "picture" src = "assets/images/project_1/Screenshot_two.png" alt = "Project 1 screenshot_2">
      <img class = "picture" src = "assets/images/project_1/Screenshot_three.png" alt = "Project 1 screenshot_3">
    </div>
    <br>
  </div>
  <hr style = "border-color:#D3D3D3">

  <div>
    <h2 class = "project-type">Android App</h2>
    <br>
    <a class = "project" href = "https://github.com/DelvinOR/android-chess-game" target = "_blank">Chess Game App: android chess app with screen recording functionality </a>
    <br>
    <div class = "pictures">
      <img class = "picture" src = "assets/images/project_2/Screenshot_one.png" alt = "Project 2 screenshot one">
    </div>
  </div>
  <hr style = "border-color:#D3D3D3">
  `,
  styles: [`
    .category{
      text-align: left;
      font-size: 180%;
      font-family: "Times New Roman", sans-serif;
      font-weight: bold;
    }

    .project-type{
      font-family: "Times New Roman", sans-serif;
      font-size: 150%;
      text-align: left;
      font-weight: bold;
    }

    .project{
      text-align: left;
      font-size: 150%;
      font-family: "Times New Roman", sans-serif;
      color: #1E90FF;
    }

    .pictures{
      display: flex;
      justify-content: flex-start;
    }

    .picture{
      margin: 10px;
    }

    .text{
      font-size = 15px;
    }

    :host{
      flex-shrink: 1;
      width: 40%;
    }
  `]
})
export class RightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
