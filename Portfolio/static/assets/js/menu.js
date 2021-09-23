// Navigation

// Underline nav items when section comes into view
$(document).scroll(function(){
    var t = $(this).scrollTop();

    $('section').each(function() {
        if(t > $(this).offset().top + -300 && t <= $(this).offset().top + $(this).height() ){
            var id = $(this).attr('id');
            $('a[href="#'+id+'"]').addClass('active');
        } else {
            var id = $(this).attr('id');
            $('a[href="#'+id+'"]').removeClass('active');
        }
    });

});

// Mobile Navigation
$(document).ready(function(){
	$('#menu-btn').click(function(){
		$(this).toggleClass('open');
    $('nav ul').toggleClass('show');
	});
});
