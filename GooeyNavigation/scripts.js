/*
Stylesheet
adamprinz.com
© 2018 Adam Prinz
*/





/*

Goo

*/

var gooMenu = document.getElementById("goo-menu");
var goo = document.getElementById("goo");
var gooGyro = document.querySelectorAll(".goo-gyro");
var gooItem = document.querySelectorAll(".goo-item");
var contact = document.getElementById("contact");
var work = document.getElementById("work");
var workItem =  document.getElementById("work-item");
var workDescription = document.querySelectorAll(".work-description");
var about =  document.getElementById("about");
var aboutItem =  document.getElementById("about-item");
var aboutDescription = document.querySelector(".about-description");

var counter = 0;
var counterContact = 0;
var counterWork = 0;
var counterAbout = 0;


goo.onclick = function open() {
    if (counter == 0) {
        counter = 1; 
        gooItem[0].style = "transform: translate(20vmin, 100px);";
        goo.style = "transform: scale(0.65);";
        setTimeout(function () {
            gooItem[1].style = "transform: translate(0, 200px);";
            goo.style = "transform: scale(0.55);";
        }, 200);
        setTimeout(function () {
            gooItem[2].style = "transform: translate(-20vmin, 100px);";
            goo.style = "transform: scale(0.45);";
        }, 400);
    }

    else {
        //Reset counters
        counter = 0;
        counterContact = 0;
        counterWork = 0;
        counterAbout = 0;

        goo.style = "transform: scale(1);"
        
        //For work items
        workItem.classList.remove("goo-expand");
        for (var i = 0; i < workDescription.length; i++) {
            workDescription[i].style = "display: none;";
        }
        workItem.style = "transform: translate(0);";

        //For about items
        aboutItem.classList.remove("goo-expand");
        aboutDescription.style = "display: none;";
        aboutItem.style = "transform: translate(0);";

        //For goo items (including contact items)
        for (var i = 0; i < gooItem.length; i++) {
            gooItem[i].style = "transform: translate(0);";
        }

    } 
}



contact.onclick = function contact() {
    if (counterContact == 0) {
        counterContact = 1; 
        gooItem[0].style = "transform: translate(0, 200px);";
        setTimeout(function () {
            gooItem[2].style = "transform: translate(0, 200px); z-index: 2;";
        }, 200);
        setTimeout(function () {
            gooItem[3].style = "transform: translate(0, 350px);";
        }, 400);
    }

    else {
        counterContact = 0;
        gooItem[3].style = "transform: translate(0);";
        setTimeout(function () {
            gooItem[0].style = "transform: translate(20vmin, 100px);";
        }, 200);
        setTimeout(function () {
            gooItem[1].style = "transform: translate(0, 200px);";
        }, 400);
        setTimeout(function () {
            gooItem[2].style = "transform: translate(-20vmin, 100px); z-index: 1;";
        }, 600);
    } 
}



work.onclick = function work() {
    if (counterWork == 0) {
        counterWork = 1;
        gooItem[1].style = "transform: translate(0, 200px); z-index: 2;";
        gooItem[0].style = "transform: translate(0, 200px);";
        setTimeout(function () {
            gooItem[2].style = "transform: translate(0, 200px);";
        }, 200);
        setTimeout(function () {
            workItem.style = "transform: translate(0, 350px);";
        }, 400);
        setTimeout(function () {
            workItem.classList.add("goo-expand");
            for (var i = 0; i < workDescription.length; i++) {
                workDescription[i].style = "display: inline-block;";
            }
        }, 1000);
    }

    else {
        counterWork = 0;
        setTimeout(function () {
            for (var i = 0; i < workDescription.length; i++) {
                workDescription[i].style = "display: none;";
            }
            workItem.classList.remove("goo-expand");
        }, 100);
        setTimeout(function () {
            workItem.style = "transform: translate(0);";
        }, 400);
        setTimeout(function () {
            gooItem[0].style = "transform: translate(20vmin, 100px);";
        }, 600);
        setTimeout(function () {
            gooItem[1].style = "transform: translate(0, 200px); z-index: 1;";
            gooItem[2].style = "transform: translate(-20vmin, 100px);";
        }, 800);
    }

}



about.onclick = function about() {
    if (counterAbout == 0) {
        counterAbout = 1;
        gooItem[0].style = "transform: translate(0, 200px); z-index: 2;";
        gooItem[1].style = "transform: translate(0, 200px);";
        setTimeout(function () {
            gooItem[2].style = "transform: translate(0, 200px);";
        }, 200);
        setTimeout(function () {
            aboutItem.style = "transform: translate(0, 350px);";
        }, 400);
        setTimeout(function () {
            aboutItem.classList.add("goo-expand");
            aboutDescription.style = "display: inline-block;";
        }, 800);
    }

    else {
        counterAbout = 0;
        setTimeout(function () {
            aboutDescription.style = "display: none;";
            aboutItem.classList.remove("goo-expand");
        }, 100);
        setTimeout(function () {
            aboutItem.style = "transform: translate(0);";
        }, 400);
        setTimeout(function () {
            gooItem[0].style = "transform: translate(20vmin, 100px);";
        }, 600);
        setTimeout(function () {
            gooItem[1].style = "transform: translate(0, 200px); z-index: 1;";
        }, 800);
        setTimeout(function () {
            gooItem[2].style = "transform: translate(-20vmin, 100px);";
        }, 1000);
    }

}


