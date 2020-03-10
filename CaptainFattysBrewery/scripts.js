
/*

Captain Fatty's Brewery Stylesheet
Copyright ©2018 Adam Prinz

*/



//Navigation script for slide-in-right menu

var menubtn= document.getElementById('menu-btn');
var ul = document.querySelector('nav ul');
var counter = 1;



menubtn.onclick = function perform() {

    //slide in the list items
    if (counter == 1) {

        //add animation class to the hamburger menu
        menubtn.setAttribute('class', 'open');

        //bring in menu
        ul.style.transform = "translateX(0)";

        counter = 0;

    } else {


        //remove animation class to the hamburger menu
        menubtn.removeAttribute('class', 'open');

        //send out menu
        ul.style.transform = "translateX(120%)";
        
        counter = 1; 
        
    }
    
}




//Header Wheel Spin


onscroll = function spin() {

    
    var wheel = document.getElementById("wheel");

    wheel.style.transform = "rotate(" + window.pageYOffset/10 +"deg)";

}





//Google Map Location - Captain Fatty's Brewery

function fattyMap() {
   
    var fatty = {lat: 34.4395057, lng: -119.85177429999999};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 15, center: fatty});
    var marker = new google.maps.Marker({position: fatty, map: map});

}