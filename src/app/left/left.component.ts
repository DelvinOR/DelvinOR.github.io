import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  template:`

  <div class = "left">Delvin Ortiz</div>
  <br>
  <br>
  <img class = "center" src = "assets/images/profile_headshot_shot.png" alt = "Profile headshot">
  <br>
  <p class = "paragraph text">I am a recent graduate from Rutgers University. Currently, I aspire 
    to obtain a position in software engineering or application development and 
    to one day work in the space industry.
  </p>
  <p class = "paragraph text">Fun fact: In 2019. I traveled to Phoenix, AZ and enjoyed In N Out 
    for the first time. My favorite animated series is Robotech (1985).
  </p>
  <br>
  <a class = "text text-color" href = "https://www.linkedin.com/in/delvinoritz/" target = "_blank">View My LinkedIn Profile</a>
  <br>
  <br>
  <a class = "text text-color" href = "https://github.com/DelvinOR" target = "_blank">View My GitHub Profile</a>
  `,
  styles: [`
    .left{
      text-align: left;
      font-size: 170%;
      font-family: Arial, sans-serif;
      font-weight: bold;
      color: #6495ED;
    }
    .paragraph{
      text-align: left;
      font-size 20px;
      font-family: Arial, sans-serif;
    }

    .center{
      display:block;
      margin: auto;
      width: 70%;
      border-radius: 50%;
    }

    .text{
      font-size = 12px;
    }

    .text-color{
      color: #87CEFA;
    }
    
    :host{
      flex-shrink: 1;
      width: 25%;
      margin-right: 50px;
    }
  `]
})
export class LeftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
