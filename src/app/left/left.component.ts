import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  template:`

  <h2 class = "left">Delvin Ortiz</h2>
  <hr style = "border-color:#ADFF2F">
  <br>
  <br>
  <img class = "center" src = "assets/images/profile_headshot_shot.png" alt = "Profile headshot">
  <br>
  <br>
  <p class = "paragraph text">4 years of experience developing web apps and mobile android apps. Most proficient 
  technologies include Java, XML, HTML, CSS, JavaScript/TypeScript, SQL, and Git. Knowledgeable of Linux operating 
  system and terminal commands. Posses a Bachelor of Science degree in Computer Science from Rutgers University. 
  </p>
  <p class = "paragraph text">Fun fact: This portfolio website was built over the Angular framework and utilized Angular CLI.
  </p>
  <br>
  <a class = "text text-color" href = "https://www.linkedin.com/in/delvinoritz/" target = "_blank">View My LinkedIn Profile</a>
  <br>
  <br>
  <a class = "text text-color" href = "https://github.com/DelvinOR" target = "_blank">View My GitHub Profile</a>
  <br>
  <br>
  <a class = "text text-color" href = "https://www.dropbox.com/s/x615pv9kobog9qg/CS.2020.OrtizD.pdf?dl=0" target = "_blank">View My Resume</a>
  `,
  styles: [`
    .left{
      text-align: left;
      font-size: 200%;
      font-family: "Times New Roman", sans-serif;
      font-weight: bold;
      color: #FFEBCD;
    }
    .paragraph{
      text-align: left;
    }

    .center{
      display: block;
      margin: auto;
      width: 300px;
      height: 286px;
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
      margin-right: 75px;
    }
  `]
})
export class LeftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
