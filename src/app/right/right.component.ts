import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  template:`

  <h2 class = "category">Portfolio</h2>

  <hr style = "border-color:#ADFF2F">

  <h2 class = "project-type">Candidate Manager</h2>
  <a class = "project" href = "https://github.com/DelvinOR/CandidateSpringMVC" target = "_blank">Code available here</a>
  <br>
  <br>
  <div class = "pictures">
    <a href = "https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/140076405_214917526959742_4567978583872251986_n.png?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=GzVeHB1W4FEAX_kl0lK&_nc_ht=scontent-lga3-2.xx&oh=2f3d1b7226a2d98c70b082e6ad6b17a3&oe=60309864" target = "_blank"><img class = "picture" src = "assets/images/project_3/Screenshot_one.png" alt = "Project 3 screenshot one"></a>    
  </div>
  <div class = "pictures">
    <a href = "https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/140210217_265147998364448_7427147972188746034_n.png?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_ohc=5vkzbYkArP4AX8IZkQ6&_nc_ht=scontent-lga3-2.xx&oh=a36c742a2081300c219b1c964594a79f&oe=602F9771" target = "_blank"><img class = "picture" src = "assets/images/project_3/Screenshot_two.png" alt = "Project 3 screenshot two"></a>   
  </div> 
  <br>

  <hr style = "border-color:#ADFF2F">

  <h2 class = "project-type">PokéAPI REST Client</h2>
  <a class = "project" href = "https://github.com/DelvinOR/Pokemon-API-Client" target = "_blank">Code available here</a>
  <br>
  <br>
  <div class = "pictures">
    <a href = "https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/139227973_1197937680603131_5857407624052042018_n.png?_nc_cat=109&ccb=2&_nc_sid=ae9488&_nc_ohc=jam0ujAvti8AX-dHbnj&_nc_ht=scontent-lga3-2.xx&oh=349a76c22c7d9e206f72b8be12702848&oe=602B68EB" target = "_blank"><img style = "width:100%" src = "assets/images/project_4/PokemonAPIClient_Screenshot.png" alt = "Project 4 screenshot_1"></a>
  </div>
  <br>

  <hr style = "border-color:#ADFF2F">

  <h2 class = "project-type">BuyMe Web App</h2>
  <a class = "project" href = "https://github.com/DelvinOR/BuyMe" target = "_blank">Code available here</a>
  <br>
  <br>
  <div class = "pictures">
    <a href = "https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/139601923_166422581907843_2189226753393645875_n.png?_nc_cat=107&ccb=2&_nc_sid=ae9488&_nc_ohc=7qw4v195VB0AX-jzMif&_nc_ht=scontent-lga3-2.xx&oh=def70ebe82b16b424636fd96083702e3&oe=602DBA97" target = "_blank"><img style = "width:100%" src = "assets/images/project_1/BuyMe_Screenshot.png" alt = "Project 1 screenshot_1"></a>
  </div>
  <br>
  
  <hr style = "border-color:#ADFF2F">

  <h2 class = "project-type">Android Chess App</h2>
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
