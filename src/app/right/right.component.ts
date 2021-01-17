import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  template:`

  <h2 class = "category">Portfolio</h2>

  <hr style = "border-color:#ADFF2F">

  <h2 class = "project-type">eCommerce Website</h2>
  <p class = "paragraph">Melananted Market is a multi-page eCommerce site with product listing, contact forms, and mailing list. 
  Front-end programmed in HTML5, CSS, and JavaScript. Domain is hosted on the Weebly platform.
  </p>
  <a class = "project" href = "http://www.melanatedmarketcommerce.org/#/" target = "_blank">Website</a>
  <br>
  <br>
  <a class = "project" href = "https://github.com/DelvinOR/Melanated-Market-Commerce" target = "_blank">Code available here</a>
  <br>
  <br>
  <div class = "pictures">
    <img class = "picture" src = "assets/images/project_3/Screenshot_one.png" alt = "Project 3 screenshot_1">
    <img class = "picture" src = "assets/images/project_3/Screenshot_two.png" alt = "Project 3 screenshot_2">
    <img class = "picture" src = "assets/images/project_3/Screenshot_three.png" alt = "Project 3 screenshot_3">
  </div>
  <br>
  
  <hr style = "border-color:#ADFF2F">

  <h2 class = "project-type">Android Chess App</h2>
  <p class = "paragraph">Fully funtional chess game app for two players. Includes
  screen recording functionality and video vault for replaying recent matches. This project was coded in 
  Java, XML, and utilizes Git for version control.
  </p>
  <a class = "project" href = "https://github.com/DelvinOR/android-chess-game" target = "_blank">Code available here</a>
  <br>
  <br>
  <div class = "pictures">
    <img class = "picture" src = "assets/images/project_2/Screenshot_one.png" alt = "Project 2 screenshot one">    
    <img class = "picture" src = "assets/images/project_2/Screenshot_two.png" alt = "Project 2 screenshot two">    
    <img class = "picture" src = "assets/images/project_2/Screenshot_three.png" alt = "Project 2 screenshot three">    
  </div>
  <br>
  <div class = "pictures">
    <img class = "picture" src = "assets/images/project_2/Screenshot_four.png" alt = "Project 2 screenshot four">    
  </div>
  <br>

  <hr style = "border-color:#ADFF2F">

  <h2 class = "project-type">Android Distance Converter App</h2>
  <p class = "paragraph">Successful distance converter android app with nine different 
  possible units of distance to convert any value to. User-interface is designed in XML and 
  back-end is developed using Java.
  </p>
  <a class = "project" href = "https://play.google.com/store/apps/details?id=com.delvinortiz.distanceconversion" target = "_blank">App Store Link</a>
  <br>
  <br>
  <a class = "project" href = "https://github.com/DelvinOR/distance-conversion-app" target = "_blank">Code available here</a>
  <br>
  <br>
  <div class = "pictures">
    <img class = "picture" src = "assets/images/project_1/Screenshot_one.png" alt = "Project 1 screenshot_1">
    <img class = "picture" src = "assets/images/project_1/Screenshot_two.png" alt = "Project 1 screenshot_2">
    <img class = "picture" src = "assets/images/project_1/Screenshot_three.png" alt = "Project 1 screenshot_3">
  </div>
  <br>
  `,
  styles: [`
    .category{
      text-align: left;
      font-size: 180%;
      font-family: "Times New Roman", sans-serif;
      font-weight: bold;
      color: #FFEBCD;
    }

    .project-type{
      font-family: "Times New Roman", sans-serif;
      font-size: 120%;
      text-align: left;
      font-weight: bold;
      color: #FFEBCD;
    }

    .project{
      text-align: left;
      font-size: 100%;
      font-family: "Times New Roman", sans-serif;
      color: #ADFF2F;
    }

    .paragraph{
      text-align: left;
      font-size: 100%;
      font-family: "Times New Roman", sans-serif;
      color: #F8F8FF;
    }

    .pictures{
      display: flex;
      justify-content: flex-start;
      flex-flow: row wrap;
      width: 100%;
    }

    .picture{
      margin-right: 10px;
      width: 31%;
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
