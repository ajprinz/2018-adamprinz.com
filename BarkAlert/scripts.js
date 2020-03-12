/*jslint browser: true*/
/*global $, jQuery, alert*/



//javascript for nav

$(window).scroll(function () {
    'use strict';

    if ($(window).scrollTop() > 60) {
        $('header').css({
            "top": "-70px"
        });
        $('header h2').css({
            "display": "none"
        });
    }
    
    if ($(window).scrollTop() < 50) {
        $('header').css({
            "top": "0px"
        });
        $('header h2').css({
            "display": "block"
        });
    }
});


//javascript for quiz

var c = 0;

function correct() {
    'use strict';
    c += 1;
    return c;
}

function myResult() {
    'use strict';
    $('#result').fadeIn().html("You got " + c + " correct");
}




var n = 0;

function nextQuestion() {
    'use strict';
    if (n === 0) {
        $('#q1').fadeOut();
        $('#q2').fadeIn();
        n = 1;
        return;
    }
    
    if (n === 1) {
        $('#q2').fadeOut();
        $('#q3').fadeIn();
        n = 2;
        return;
    }
    
    if (n === 2) {
        $('#q3').fadeOut();
        $('#q4').fadeIn();
        n = 3;
        return;
    }
    
    if (n === 3) {
        $('#q4').fadeOut();
        myResult();
        return;
    }
}




//javascript for purchase page slider

var pictures = [$('#prototype'), $('#engraved'), $('#mockup')];
var i = 1;

function sliderRight() {
    'use strict';
    
    pictures[i].show();
    pictures[2].hide();
    
    if (i > 0) {
        pictures[i - 1].hide();
    }
    
    if (i === 2) {
        i = 0;
        pictures[2].show();
        return;
    }
    
    i += 1;
}

function sliderLeft() {
    'use strict';
    if (i > 0) {
        i -= 1;
    }
    
    pictures[i].show();
    pictures[0].hide();
    
    if (i < 2) {
        pictures[i + 1].hide();
    }
    
    if (i === 0) {
        i = 3;
        pictures[0].show();
        return;
    }
}



//javascript for "add to cart" button

function addToCart() {
    'use strict';
    alert("This site is for educational purposes. GIT 210 - Spring 2017");
}