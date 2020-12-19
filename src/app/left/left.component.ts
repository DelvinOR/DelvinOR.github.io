import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  template:`

  <div class = "left">Delvin Ortiz</div>
  <br>

  <img class = "center" src = "assets/images/profile_headshot_shot.png" alt = "Profile headshot">
  <br>
  <p class = "paragraph text">Welcome to my portfolio! My name is Delvin. 
    I am a recent graduate from Rutgers University. Currently, I aspire 
    to obtain a position in software engineering or application development and 
    to one day work in the space industry.
  </p>
  <p class = "paragraph text"> My strong suit technologies include Java, HTML, 
    CSS, TypeScript/JavaScript, and SQL. One of my main expertise is android 
    app development. Currently, I have one app published in the Google Play Store 
    titled "Distance Converter" which is a single page educational app for 
    converting units of distance. Additonally, I have experience creating dynamic 
    websites. By using SQL and Java Servlet Pages (JSP), I am able to 
    successfully store user data into a database in MySQL. Right now, I am 
    self-teaching myself Angular and this is the framework I used to build this 
    single page website.
  </p>
  <br>
  <a class = "text" href = "https://www.linkedin.com/in/delvinoritz/" target = "_blank">View My LinkedIn Profile</a>
  <br>
  <br>
  <a class = "text" href = "https://github.com/DelvinOR" target = "_blank">View My GitHub Profile</a>
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
      margin:autor;
      width: 70%
      border-radius: 50%;
    }

    .text{
      font-size = 15px;
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
