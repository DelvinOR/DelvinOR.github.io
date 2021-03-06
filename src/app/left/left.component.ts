import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  template:`

  <h2 class = "left">Delvin Ortiz</h2>
  <hr style = "border-color:#ADFF2F">
  <br>
  <br>
  <div class = "image-container">
    <img class = "center" src = "assets/images/profile_headshot_shot.png" alt = "Profile headshot">
  </div>
  <br>
  <br>
  <p class = "paragraph text">Four years of programming experience. Most proficient 
  technologies include Java, JavaScript, Spring, REST APIs, SQL, and Git. 
  Posses a Bachelor of Science degree in Computer Science from Rutgers University. 
  </p>
  <p class = "paragraph text">Fun fact: This website was built over the Angular framework and utilizes the Angular CLI.
  </p>
  <br>
  <a class = "text text-color" href = "https://www.linkedin.com/in/delvinoritz/" target = "_blank">View My LinkedIn Profile</a>
  <br>
  <br>
  <a class = "text text-color" href = "https://github.com/DelvinOR" target = "_blank">View My GitHub Profile</a>
  `,
  styles: [`
    .image-container{
      display: flex;
      width: 100%;
    }

    .image-container > img{
      width: 70%;
      height: 80%;
    }

    .left{
      text-align: left;
      font-size: 200%;
      font-family: "Times New Roman", sans-serif;
      font-weight: bold;
      color: #FFEBCD;
    }
    .paragraph{
      text-align: left;
      width: 100%;
    }

    .center{
      display: block;
      margin-left: auto;
      margin-right: auto;
      /*border: 2px solid #1E90FF;*/
      background-color: #A9A9A9;
      border-radius: 50%;
    }

    .text{
      font-size: 100%;
      font-family: "Times New Roman", sans-serif;
      color: #F8F8FF;
    }

    .text-color{
      color: #ADFF2F;
    }
    
    :host{
      flex-shrink: 1;
      width: 20%;
      margin-right: 10%; /*Have to use percentages as using fixed width and height pixes will force elements to stick to this size*/
    }
  `]
})
export class LeftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
