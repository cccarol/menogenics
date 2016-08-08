$(function() {
	$(document).foundation();

	$('.hero').slick({
	  dots: false,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});

	$('.menu').click(function(e) {
		e.preventDefault();
		$('nav').toggleClass('opened');
	})

});