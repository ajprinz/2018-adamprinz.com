
/*

Adam Prinz | Bookkeeping
Copyright © 2019 Adam Prinz

*/



//Slide-down menu + animation

$(document).ready(function(){

    counter = 0;

    $("#menu-btn").click(function(){
        $("#menu").slideToggle("slow");
    });

    $("#menu-btn").click(function(){
        if(counter == 0){
            $("#menu-btn").addClass("open");
            counter = 1;
        } else {
            $("#menu-btn").removeClass("open");
            counter = 0;
        }
    });

});




//Smooth Scroll (jQuery)

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });
});



//header
$(document).ready(function(){
  $(window).on("scroll", function() {
  if($(window).scrollTop() > 100) {
      $("header").addClass("headeractive");
  } else {
      //remove the background property so it comes transparent again (defined in your css)
     $("header").removeClass("headeractive");
  }
});
});
