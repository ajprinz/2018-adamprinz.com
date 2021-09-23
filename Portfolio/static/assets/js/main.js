
// ScrollTrigger script to fade text off/on when scrolling
gsap.registerPlugin(ScrollTrigger);

gsap.config({
  nullTargetWarn: false // Surpress warning when an element is absent
});

var sections = gsap.utils.toArray(".left-block");
// Apply the triggers and elements to fade for each html section
sections.forEach((elem, i) => {
  var trigger = elem.querySelector("p");
  var headlines = elem.querySelectorAll("h3, p, img, button, input, textarea");
  const tl = gsap.timeline( {
     scrollTrigger: {
       trigger: trigger,
       start: "center 80%",
       end: "bottom 5%",
       scrub: true,
       markers: false,
       toggleActions: "play reverse play reverse",
     }
  });
   tl
     .to(headlines, { opacity: 1, duration: 0.4, stagger: 0.03 })
     .to(headlines, { opacity: 0, duration: 0.4, stagger: 0.03 }, 0.8 )
   ;

});

var sections = gsap.utils.toArray(".end-left-block");
// Apply the triggers and elements to fade for each html section
sections.forEach((elem, i) => {
  var trigger = elem.querySelector("p");
  var headlines = elem.querySelectorAll("h3, p, img, button, input, textarea");
  const tl = gsap.timeline( {
     scrollTrigger: {
       trigger: trigger,
       start: "center 80%",
       endTrigger:"html",
       end:"bottom top",
       scrub: true,
       markers: false,
       toggleActions: "play reverse play reverse",
     }
  });
   tl
     .to(headlines, { opacity: 1, duration: 0.2, stagger: 0.03 })
     .to(headlines, { opacity: 0, duration: 0.4, stagger: 0.03 }, 0.8 )
   ;
});

/*
// Contact profile picture animation
var sections = gsap.utils.toArray(".end-right-block");
// Apply the triggers to elements in the html section
sections.forEach((elem, i) => {
  var trigger = elem.querySelector(".profilepicture");
  var headlines = elem.querySelectorAll(".profilepicture");
  const tl = gsap.timeline( {
     scrollTrigger: {
       trigger: trigger,
       start: "top bottom+=300",
       end:"bottom top+=800",
       scrub: true,
       markers: false,
       toggleActions: "play reverse play reverse",
     }
  });
   tl
     .to(headlines, { right: 40, rotation: 0, duration: 0.6})
   ;
});

sections.forEach((elem, i) => {
  var trigger = elem.querySelector(".stick");
  var headlines = elem.querySelectorAll(".stick");
  const tl = gsap.timeline( {
     scrollTrigger: {
       trigger: trigger,
       start: "top center+=165",
       end:"bottom top+=800",
       scrub: true,
       markers: false,
       toggleActions: "play reverse play reverse",
     }
  });
   tl
     .to(headlines, { right: 22, rotation: -45, duration: 0.6})
   ;
});

*/

// Change slider image sizes on screen rezise
function sliderResize() {
  document.querySelectorAll('.slick-slide').forEach(el => {
    Array.from(el.children).forEach(img => {
      img.style.height = `${400}px`
    })

    if ($(window).width() < 960) {
      Array.from(el.children).forEach(img => {
        img.style.height = `${300}px`
      })
    }

    if ($(window).width() < 660) {
      Array.from(el.children).forEach(img => {
        img.style.height = `${150}px`
      })
    }
  })
}

// Slick Slider Settings
$(document).ready(function(){
  $('.slider').not('.slick-initialized').slick({
    arrows: true,
    dots: true,
    variableWidth: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});


// Bind to the resize event of the window object
$(window).on("resize", function () {
  sliderResize();
// Invoke the resize event immediately
}).resize();


// Smooth scrolling
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top-300
  }, 500);
});


$(function() {

    var $sidebar   = $("#projects-bar-content"),
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 250,
        stop       = $("#captainfattys-photos").offset().top + 500;

    $window.scroll(function() {
        if ($window.scrollTop() >= stop) {
            $sidebar.stop().animate({
                marginBottom: 0
            }, 0, 'linear');
        } else if ($window.scrollTop() > offset.top - 300) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            }, 0, 'linear');
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            }, 0, 'linear');
        }
    });

    // Underline nav items when section comes into view
    $(document).scroll(function(){
        var t = $(this).scrollTop();

        $('#Projects h4, #Projects .slider, #Projects .button').each(function() {
            if(t > $(this).offset().top - 350 && t <= $(this).offset().top + $(this).height() ){
                var id = $(this).attr('id');

                $('#projects-bar-content a[href="#'+id+'"]').addClass('active');
            } else {
                var id = $(this).attr('id');
                $('a[href="#'+id+'"]').removeClass('active');
            }
        });

    });

});
