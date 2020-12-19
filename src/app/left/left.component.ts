import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  template:`

  <div class = "left">Delvin Ortiz</div>
  <br>
  <div>
    <img src = "/home/delvin/Desktop/Internship and Job/Portfolio/DelvinOR.github.io/assets/images/profile_picture.jpg" alt = "Profile headshot">
    
    <p class = "paragraph">Welcome to my portfolio! My name is Delvin. 
    I am a recent graduate from Rutgers University. Currently, I aspire 
    to obtain a position in software engineering or application development.
    To improve my app development skills, I build software projects that can 
    be commercialized.</p>
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
      text-align: left;
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
