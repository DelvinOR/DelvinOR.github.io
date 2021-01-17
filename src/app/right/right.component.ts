import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  template:`
  <body>

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

  <!--Melanated Market image slideshow-->
  <div class="slide-container">
        <div class="myPics fade">
            <div class="number-text">1/3</div>
            <img src="assets/images/project_3/Screenshot_one.png" style="width:100%">
            <div class="caption">Home Page</div>
        </div>
        <div class="myPics fade">
            <div class="number-text">2/3</div>
            <img src="assets/images/project_3/Screenshot_two.png" style="width:100%">
            <div class="caption">Podcast Page</div>
        </div>
        <div class="myPics fade">
            <div class="number-text">3/3</div>
            <img src="assets/images/project_3/Screenshot_three.png" style="width:100%">
            <div class="caption">About Page</div>
        </div>

        <a class="prev" onclick="changeSlides(-1)">&#10094;</a>
        <a class="next" onclick="changeSlides(1)">&#10095;</a>
  </div>
  <!--Dots-->
  <div style="text-align:center">
        <span class="dot" onclick="currentIndex(1)"></span>
        <span class="dot" onclick="currentIndex(2)"></span>
        <span class="dot" onclick="currentIndex(3)"></span>
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

  </body>

  <script>
    var slidingIndex = 1;
    showPics(slidingIndex);

    function changeSlides(n) {
        showPics(slidingIndex += n);
    }

    function currentIndex(n) {
        showPics(slidingIndex = n);
    }

    function showPics(n) {
        var i;
        var pictures = document.getElementsByClassName("myPics");
        var dots = document.getElementsByClassName("dot");
        if (n > pictures.length) { slidingIndex = 1 }
        if (n < 1) { slidingIndex = pictures.length }
        for (i = 0; i < pictures.length; i++) {
            pictures[i].style.display = none;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }
        pictures[slidingIndex - 1].style.display = "block";
        dots[slidingIndex - 1].className += " active";
    }
  </script>
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

    /*This CSS code is for the slideshow pic for website*/
    .myPics {
        display: none;
    }

    img {
        vertical-align: top;
    }

    /*Slideshow container class*/
    .slide-container {
        box-sizing: border-box;
        max-width: 100%;
        position: relative;
        margin: auto;
    }

    /*Next and Prev buttons*/
    .prev,
    .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 16px;
        color: #000000;
        font-weight: bold;
        font-size: 100%;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
    }

    .next {
        right: 0;
        border-radius: 3px 0 0 3px;
    }

    .prev:hover,
    .next:hover {
        background-color: #ADFF2F;
    }

    /*Caption*/
    .caption {
        color: #F8F8FF;
        font-size: 100%;
        position: absolute;
        width: 100;
        bottom: 8%;
        text-align: center;
    }

    /*Number slide text*/
    .number-text {
        color: #f2f2f2;
        font-size: 80%;
        padding: 5% 8%;
        position: absolute;
        top: 0;
    }

    /*dots/bullets*/
    .dot {
        cursor: pointer;
        height: 100%;
        width: 20%;
        margin: 0 5%;
        background-color: #F8F8FF;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
    }

    .active,
    .dot:hover {
        background-color: #ADFF2F;
    }

    /*fade animation*/
    .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 1.5s;
        animation-name: fade;
        animation-duration: 1.5s;
    }

    @-webkit-keyframes fade {
      from {
          opacity: .4
      }

      to {
          opacity: 1
      }
    }

    @keyframes fade {
        from {
            opacity: .4
        }

        to {
            opacity: 1
        }
    }

    /*for mobile devices*/
    @media only screen and (max-width: 100%) {

        .prev,
        .next,
        .text {
            font-size: 90%
        }
    }
  `]
})
export class RightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
