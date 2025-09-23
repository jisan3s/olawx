(function($) {
    'use strict';

    // Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar').addClass("is-sticky");
		}
		else{
			$('.navbar').removeClass("is-sticky");
		}
	});

	// Navbar Menu JS
    $('.navbar .navbar-nav li a, .banner-content .default-btn, .banner-content .logo, .navbar-brand').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 80);
        e.preventDefault();
    });

})($);