
/*

Adam Prinz | Portfolio
Copyright ©2019 Adam Prinz adamprinz.com


*/



//Global Variables
var title = document.getElementById('title');
var portfolio = document.getElementById('flex');


//Functions on window load
window.onload = function() {

    setTimeout(() => {
        fadein();
    }, 1000);

    setTimeout(() => {
        openwidth();
    }, 2000);
    
}


//Fade In Title
function fadein() {

    title.style.transition = '3s';
    title.style.opacity = '1';

}


//Open Portfolio Width
function openwidth() {

    portfolio.style.width = "20vmax";

    setTimeout(() => {
        portfolio.style.transition = '0.5s';
    }, 1000);

}


//Move title on portfolio hover
portfolio.onmouseover = function movetitle() {

    title.style.transition = '0.5s ease';
    title.style.marginTop = '5vh';

}

portfolio.onmouseout = function movetitle() {

    title.style.marginTop = '30vh';

}