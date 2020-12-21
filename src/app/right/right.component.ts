import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  template:`

  <h2 class = "category">Portfolio</h2>
  <hr style = "border-color:#D3D3D3">

  <h2 class = "project-type">Android App</h2>
  <a class = "project" href = "https://github.com/DelvinOR/distance-conversion-app" target = "_blank">Distance Converter: application used to change units of distance</a>
  <br>
  <br>
  <div class = "pictures">
    <img class = "picture" src = "assets/images/project_1/Screenshot_one.png" alt = "Project 1 screenshot_1">
    <img class = "picture" src = "assets/images/project_1/Screenshot_two.png" alt = "Project 1 screenshot_2">
    <img class = "picture" src = "assets/images/project_1/Screenshot_three.png" alt = "Project 1 screenshot_3">
  </div>
  <br>
  <hr style = "border-color:#D3D3D3">

  <h2 class = "project-type">Android App</h2>
  <a class = "project" href = "https://github.com/DelvinOR/android-chess-game" target = "_blank">Chess Game App: android chess app with screen recording functionality </a>
  <br>
  <br>
  <div class = "pictures">
    <img class = "picture" src = "assets/images/project_2/Screenshot_one.png" alt = "Project 2 screenshot one">    
    <img class = "picture" src = "assets/images/project_2/Screenshot_two.png" alt = "Project 2 screenshot two">    
    <img class = "picture" src = "assets/images/project_2/Screenshot_three.png" alt = "Project 2 screenshot three">    
    <img class = "picture" src = "assets/images/project_2/Screenshot_four.png" alt = "Project 2 screenshot four">    
  </div>

  <hr style = "border-color:#D3D3D3">

  <h2 class = "project-type">eCommerce Website</h2>
  <a class = "project" href = "www.melanatedmartketcommerce.org" target = "_blank">Melanated Market Commerce: multi-page eCommerce site with product listing, contact form, and mailing list</a>
  <br>
  <br>
  <div class = "pictures">
    <img class = "picture" src = "assets/images/project_3/Screenshot_one.png" alt = "Project 3 screenshot_1">
    <img class = "picture" src = "assets/images/project_3/Screenshot_two.png" alt = "Project 3 screenshot_2">
    <img class = "picture" src = "assets/images/project_3/Screenshot_three.png" alt = "Project 3 screenshot_3">
  </div>
  
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
      font-size: 120%;
      font-family: "Times New Roman", sans-serif;
      color: #1E90FF;
    }

    .pictures{
      display: flex;
      justify-content: flex-start;
      flex-flow: row wrap;
      width: 100%;
    }

    .picture{
      margin-right: 10px;
      width: 30%;
      height: 500px;
      flex-shrink: 1;
    }

    .text{
      font-size: 15px;
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
